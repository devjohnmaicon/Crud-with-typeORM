import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { GetAllCategoriesController } from "./controllers/GetAllCategoriesController";
import { DeleteCategoryController } from "./controllers/DeleteCategoryController";
import { UpdateCategoryController } from "./controllers/UpdateCategoryController";
import { GetCategoryController } from "./controllers/GetCategoryController";
import { CreateVideoController } from "./controllers/CreateVideoController";

const routes = Router();

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController().handle);
routes.get("/categories/:id", new GetCategoryController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);

routes.post("/videos", new CreateVideoController().handle);


export { routes };
