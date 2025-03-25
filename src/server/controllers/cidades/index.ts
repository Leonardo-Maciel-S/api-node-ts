import * as create from "./create";
import * as getAll from "./get-all";
import * as deleteById from "./delete-by-id";
import * as getById from "./get-by-id";
import * as updateById from "./update-by-Id";

export const cidadesController = {
  ...create,
  ...getAll,
  ...deleteById,
  ...getById,
  ...updateById,
};
