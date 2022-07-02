import { Op, Sequelize } from 'sequelize'
import { Fn } from 'sequelize/dist/lib/utils'
import { sequelize } from '../database'
import { Course } from '../models'

export const courseService = {
  findByIdWithEpisodes: async (id: string) => {
    const coursesById = await Course.findByPk(id, {
      attributes: ['id', 'name', 'synopsis', ['thumbmail_url', 'thumbmailUrl']],
      include: {
        association: 'episodes',
        attributes: [
          'id',
          'name',
          'synopsis',
          'order',
          ['video_url', 'videoUrl'],
          ['seconds_long', 'secondsLong']
        ],
        order: [['order', 'ASC']],
        separate: true
      }
    })
    return coursesById
  },
  getRandomFeaturedCourses: async () => {
    const featuredCourses = await Course.findAll({
      attributes: ['id', 'name', 'synopsis', ['thumbmail_url', 'thumbmailUrl']],
      where: {
        featured: true
      }
    })
    const randomFeaturedCourses = featuredCourses.sort(
      () => 0.5 - Math.random()
    ) //sort esta recebendo como parametro o Math.random para randomizar os cursos pegos pelo findAll, sort espera receber um valor positivo ou negativo, fazendo dessa forma, randomiza

    return randomFeaturedCourses.slice(0, 3) //usando slice para pegar sempre os primeiros 3 valores do array, começando do indice zero
  },
  getNewestCourses: async () => {
    const newestCourses = await Course.findAll({
      attributes: ['id', 'name', 'synopsis', ['thumbmail_url', 'thumbmailUrl']],
      order: [['created_at', 'DESC']],
      limit: 10
    })
    return newestCourses
  },

  getCoursesBySearch: async (name: string, page: number, perPage: number) => {
    const offset = (page - 1) * perPage //criando um offset para ser usado como delimitador de onde começar a procura ao usar paginação
    const { count, rows } = await Course.findAndCountAll({
      attributes: ['id', 'name', 'synopsis', ['thumbmail_url', 'thumbmailUrl']],
      where: {
        name: {
          [Op.iLike]: `%${name}%`
        }
      },
      limit: perPage,
      offset
    })
    return {
      courses: rows,
      page,
      perPage,
      total: count
    }
  }
}
