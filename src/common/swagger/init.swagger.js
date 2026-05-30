import { createRequire } from "module";

const require = createRequire(import.meta.url);

export const swaggerDocument = require("./swagger.json");
