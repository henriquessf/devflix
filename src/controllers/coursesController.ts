import {Response, Request} from 'express'
import { courseService } from '../services/courseService'

export const coursesController = {
  //GET /courses/feature
  featured: async (req: Request, res: Response) => {

    try {
      const featuredCourses = await courseService.getRandomFeaturedCourses()
      return res.json(featuredCourses)
    } catch (err) {
      if(err instanceof Error){
        return res.status(400).json({message: err.message})//retornando json do erro que pode vir a ocorrer na rota
      }
    }
  },
  show: async (req: Request, res: Response) => {
    const {id} = req.params
    try {
      const courses = await courseService.findByIdWithEpisodes(id)
      return res.json(courses)
    } catch (err) {
      if(err instanceof Error){
        return res.status(400).json({message: err.message})//retornando json do erro que pode vir a ocorrer na rota
      }
    }
  }
}