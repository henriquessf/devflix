import { Category } from "../models"

export const categoryService = {
  findAllPaginated: async (page: number, perPage: number) => {
    const offset = (page - 1) * perPage //offset será o valor limitador para saber qual valor pular na paginação
    const { count, rows } =  await Category.findAndCountAll(
      //a váriavel passa a ser um objeto usando findAndCountAll
        {
          attributes: ['id','name','position'],
          order: [['position','ASC']],
          limit: perPage,
          offset //offset: offset, ele pegará o valor inicial para começar os resultados
        }
      )
      return {
          categories: rows,
          page,
          perPage,
          total: count
        }
  },
  findCoursesByCategoryId: async (id: string) =>{//função para buscar categorias pelo ID e mostrar os cursos associados
    const categoryCourses = await Category.findByPk(id, {//pegando através da PK os cursos, usando a association 'courses'
      attributes: ['id','name'], //definindo quais colunas será trazido na função
      include: {
        association: 'courses',
        attributes: [
          'id',
          'name',
          'synopsis',
          ['thumbmail_url','thumbmailUrl']
        ]
      }
    }      
    )
    return categoryCourses
  }
}