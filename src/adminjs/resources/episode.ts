import { ResourceOptions } from "adminjs";

export const episodeResourceOptions: ResourceOptions = {
  navigation: 'Catálogo',
  editProperties: ['name','synopsis','order','uploadVideo','courseId','secondsLong'],
  filterProperties: ['name','synopsis','order','courseId','createdAt','updatedAt'],
  listProperties: ['id','name','order','courseId','courseId'],
  showProperties: ['id','name','synopsis','order','videoUrl','courseId','secondsLong','createdAt','updatedAt']
}