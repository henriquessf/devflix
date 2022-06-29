import { Response, Request } from "express";
import { Category } from "../models";

export const categoriesController = {
  index: async (req: Request, res: Response) => {//usando função index para passar na rota a req e res de categories
    const categories = await Category.findAll(
      {
        attributes: ['id','name','position'],
        order: [['position','ASC']]
      }
    )
    return res.json(categories)
  }
}