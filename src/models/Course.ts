import {DataTypes, Optional,Model } from "sequelize";
import { sequelize } from "../database";

export interface Course {
  id: number,
  name: string,
  synopsis: string,
  thumbmailUrl: string,
  featured: boolean,
  categoryId: number 
}

export interface CourseCreationAttibutes extends Optional<Course, 'id'|'thumbmailUrl'|'featured'> {}

export interface CourseInstance extends Model<Course, CourseCreationAttibutes>, Course {}

export const Course = sequelize.define<CourseInstance, Course>('Course', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    synopsis: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    thumbmailUrl: {
      type: DataTypes.STRING
    },
    featured: {
      defaultValue: false,
      type: DataTypes.BOOLEAN
    },
    categoryId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'categories', key: 'id' }, //para a referencia, usamos o model e n a tabela
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT'
    }
})