import { Request, Response } from "express";
import { GetCategoryService } from "../services/GetCategoryService";

export class GetCategoryController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new GetCategoryService();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
