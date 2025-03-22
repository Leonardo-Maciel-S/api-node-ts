import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { Schema, ValidationError } from "yup";

type TProperty = "body" | "params" | "header" | "query";

type TAllSchemas = Record<TProperty, Schema<unknown>>;

type TValidation = (schemas: Partial<TAllSchemas>) => RequestHandler;

export const validation: TValidation = (schemas) => async (req, res, next) => {
  const errorsResult: Record<string, Record<string, string>> = {};
  const arrayOfSchemas = Object.entries(schemas);

  arrayOfSchemas.forEach(([key, schema]) => {
    try {
      schema.validateSync(req[key as TProperty], {
        abortEarly: false,
      });
    } catch (err) {
      const yupError = err as ValidationError;
      const errors: Record<string, string> = {};

      yupError.inner.forEach((error) => {
        if (!error.path) return;

        errors[error.path] = error.message;
      });

      errorsResult[key] = errors;
    }
  });

  if (Object.entries(errorsResult).length === 0) {
    return next();
  }

  res.status(StatusCodes.BAD_REQUEST).json({ errorsResult });
  return;
};
