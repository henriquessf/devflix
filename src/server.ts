//arquivo principal de config do servidor
import express from 'express'
import { json } from 'stream/consumers'
import { adminJs, adminJsRouter } from './adminjs'
import { sequelize } from './database'
import { router } from './routes'

const app = express()

app.use(express.static('public'))
//app.use(caminho, rotas)
app.use(adminJs.options.rootPath, adminJsRouter)

app.use(express.json()) //isso cria um middleware para usarmos json no corpo da request dos endpoints

app.use(router)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  sequelize.authenticate().then(() => {
    console.log('DB connection successfull')
  })
  console.log(`Server started successfuly at port ${PORT}`)
})
