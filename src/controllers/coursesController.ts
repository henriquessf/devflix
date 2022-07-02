import { Response, Request } from 'express'
import { getPaginationParams } from '../helpers/getPaginationParams'
import { courseService } from '../services/courseService'

export const coursesController = {
  //GET /courses/search
  search: async (req: Request, res: Response) => {
    const { name } = req.body
    const [page, perPage] = getPaginationParams(req.query)
    try {
      if (typeof name !== 'string')
        throw new Error('name param must be of type string')
      const searchCourses = await courseService.getCoursesBySearch(
        name,
        page,
        perPage
      )
      return res.json(searchCourses)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message }) //retornando json do erro que pode vir a ocorrer na rota
      }
    }
  },
  //GET /courses/newest
  newest: async (req: Request, res: Response) => {
    try {
      const newestCourses = await courseService.getNewestCourses()
      return res.json(newestCourses)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message }) //retornando json do erro que pode vir a ocorrer na rota
      }
    }
  },

  //GET /courses/feature
  featured: async (req: Request, res: Response) => {
    try {
      const featuredCourses = await courseService.getRandomFeaturedCourses()
      return res.json(featuredCourses)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message }) //retornando json do erro que pode vir a ocorrer na rota
      }
    }
  },
  show: async (req: Request, res: Response) => {
    const { id } = req.params
    try {
      const courses = await courseService.findByIdWithEpisodes(id)
      return res.json(courses)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message }) //retornando json do erro que pode vir a ocorrer na rota
      }
    }
  }
}
