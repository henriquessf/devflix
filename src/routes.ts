import express from 'express'
import { categoriesController } from './controllers/categoriesController'
import { coursesController } from './controllers/coursesController'

const router = express.Router()

router.get('/categories',categoriesController.index)//criando a rota /categories, chamando a função index do categoriesController
router.get('/categories/:id', categoriesController.show)

router.get('/courses/featured', coursesController.featured)//a ordem das rotas deve ser por ordem de endpoint
router.get('/courses/:id', coursesController.show)//variavel dinamica deve ficar abaixo dos caminhos especificos (variavel :id)

export { router }