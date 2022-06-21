import {DataTypes, Optional,Model } from "sequelize";
import { sequelize } from "../database";

export interface Episode {
  id: number,
  name: string,
  synopsis: string,
  order: number,
  videoUrl: string,
  secondsLong: number,
  courseId: number
}

export interface EpisodeCreationAttibutes extends Optional<Episode, 'id'|'videoUrl'|'secondsLong'> {}

export interface EpisodeInstance extends Model<Episode, EpisodeCreationAttibutes>, Episode {} 

export const Episode = sequelize.define<EpisodeInstance, Episode>('Episode', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  synopsis: {
    allowNull: false,
    type: DataTypes.TEXT
  },
  order: {
    allowNull: false,
    unique: true,
    type: DataTypes.INTEGER
  },
  videoUrl: {
    type: DataTypes.STRING
  },
  secondsLong: {
    type: DataTypes.INTEGER
  },
  courseId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: 'courses', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT'
  }
})