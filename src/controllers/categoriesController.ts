import { Response, Request } from "express";
import { getPaginationParams } from "../helpers/getPaginationParams";
import { categoryService } from "../services/categoryService";

export const categoriesController = {
  // GET /categories
  index: async (req: Request, res: Response) => {    //usando função index para passar na rota a req e res de categories
    const [page,perPage] = getPaginationParams(req.query)
    
    try {
      const findPaginated = categoryService.findAllPaginated(page, perPage)

      return res.json(findPaginated)
    }catch (err) {
      if (err instanceof Error){
        return res.status(400).json({message: err.message})//retornando json do erro que pode vir a ocorrer na rota
      }
    }
  },
  //endpoint GET /categories/:id
  show: async (req: Request, res: Response) => { //criando um parametro de busca para trazer os cursos pelo id da categoria
    const { id } = req.params //desestruturando para que o parametro recebido da request, seja um id
    try {
      const categoryCourses = await categoryService.findCoursesByCategoryId(id)//passando a função o id pego na request
      return res.json(categoryCourses)//retornando o valor da função como json na response 
    } catch (err) {
      if (err instanceof Error){
        return res.status(400).json({message: err.message})//retornando json do erro que pode vir a ocorrer na rota
      }
    }
  }
}