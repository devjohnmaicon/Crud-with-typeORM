import { getRepository } from "typeorm";
import { Category } from "../entities/Category";
import { Video } from "../entities/Video";

type VideoRequest = {
  name: string;
  description: string;
  category_id: string;
  duration: number;
};

export class CreateVideoService {
  async execute({
    name,
    description,
    category_id,
    duration,
  }: VideoRequest): Promise<Video | Error> {
    const repo = getRepository(Video);
    const repoCategory = getRepository(Category);

    const hasCategory = await repoCategory.findOne(category_id);

    if (!hasCategory) {
      return new Error("Category already exists");
    }

    const video = repo.create({
      name,
      description,
      category_id,
      duration,
    });

    await repo.save(video);

    return video;
  }
}
