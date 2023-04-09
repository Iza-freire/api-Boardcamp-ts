import { Router } from "express";
import validateSchema from "../middlewares/validateMiddlewares.js";
import controller from "../controllers/customerControllers.js";
import { CustomersSchema } from "../schemas/CustomerSchemas.js";

const customersRouter = Router();

customersRouter.post("/", validateSchema(CustomersSchema), controller.createCustomer);
customersRouter.get("/", controller.allCustomers);
customersRouter.get("/:id", controller.getCustomerById);
customersRouter.put("/:id", controller.putUpdateCustomer);
customersRouter.delete("/:id", controller.deleteCustomer);

export default customersRouter;
