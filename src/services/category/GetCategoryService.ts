import { getRepository } from "typeorm";
import { Category } from "../../entities/Category";

export class GetCategoryService {
  async execute(id: string): Promise<Category | Error> {
    const repo = getRepository(Category);

    const category = await repo.findOne(id);

    if (!category) {
      return Error("Category not found");
    }

    return category;
  }
}
