import { Category } from "./Category";
import { Course } from "./Course";
import { Episode } from "./Episode";
import { User } from "./User";

Category.hasMany(Course, {as: 'courses'})//nomeando a associaçãoo da tabela category com a tabela course, como courses

Course.belongsTo(Category)
Course.hasMany(Episode)

Episode.belongsTo(Course)

export {
  Category,
  Course,
  Episode,
  User
}