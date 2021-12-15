import { Router } from "express";
import { CreateCategoryController } from "./controllers/forCategory/CreateCategoryController";
import { DeleteCategoryController } from "./controllers/forCategory/DeleteCategoryController";
import { GetAllCategoriesController } from "./controllers/forCategory/GetAllCategoriesController";
import { GetCategoryController } from "./controllers/forCategory/GetCategoryController";
import { UpdateCategoryController } from "./controllers/forCategory/UpdateCategoryController";
import { CreateVideoController } from "./controllers/forVideos/CreateVideoController";
import { GetAllVideosController } from "./controllers/forVideos/GetAllVideosController";

const routes = Router();

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController().handle);
routes.get("/categories/:id", new GetCategoryController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);

routes.post("/videos", new CreateVideoController().handle);
routes.get("/videos", new GetAllVideosController().handle);

export { routes };
