import express from 'express'
import { categoriesController } from './controllers/categoriesController'

const router = express.Router()

router.get('/categories',categoriesController.index)//criando a rota /categories, chamando a função index do categoriesController

export { router }