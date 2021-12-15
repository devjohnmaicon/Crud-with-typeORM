import { Request, Response } from "express";
import { GetAllVideosService } from "../../services/video/GetAllVideosService";

export class GetAllVideosController {
  async handle(request: Request, response: Response) {
    const service = new GetAllVideosService();

    const result = await service.execute();

    return response.json(result);
  }
}
