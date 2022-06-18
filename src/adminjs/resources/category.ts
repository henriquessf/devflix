import { ResourceOptions } from "adminjs";

export const categoryResourceOptions: ResourceOptions = {
  navigation: 'Catálogo',
  editProperties: ['name','position'],
  filterProperties: ['name','position','updatedAt','createdAt'],
  listProperties: ['id','name','position'],
  showProperties: ['id','name','position','updatedAt','createdAt']
}