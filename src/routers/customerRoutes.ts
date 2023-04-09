import { Router } from "express";
import validateSchema from "../middlewares/validateMiddlewares.js";
import { createCustomer } from "../controllers/customerControllers.js";
import { CustomersSchema } from "../schemas/CustomerSchemas.js";

const customersRouter = Router();

customersRouter.post("/", validateSchema(CustomersSchema), createCustomer )
customersRouter.get("/");
customersRouter.get("/:id");
customersRouter.put("/:id");

export default customersRouter;
