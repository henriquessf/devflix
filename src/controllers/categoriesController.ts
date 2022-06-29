import { Response, Request } from "express";
import { Category } from "../models";

export const categoriesController = {
  index: async (req: Request, res: Response) => {//usando função index para passar na rota a req e res de categories
    const categories = await Category.findAll()
    return res.json(categories)
  }
}