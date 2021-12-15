import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

type CategoryUpdateRequest = {
  id: string;
  name: string;
  description: string;
};

export class UpdateCategoryService {
  async execute({
    id,
    name,
    description,
  }: CategoryUpdateRequest): Promise<Category | Error> {
    const repo = getRepository(Category);

    const category = await repo.findOne(id);

    if (!category) {
      return new Error("Category does not exists!");
    }

    // Change in the category, if the parameter does not exist,
    // the respective field will be saved as empty
    category.name = name ? name : category.name;
    category.description = description ? description : category.description;

    await repo.save(category);

    return category;
  }
}
