import uploadFileFeature from "@adminjs/upload";
import { FeatureType, ResourceOptions } from "adminjs";
import path from "path";

export const episodeResourceOptions: ResourceOptions = {
  navigation: 'Catálogo',
  editProperties: ['name','synopsis','order','uploadVideo','courseId','secondsLong'],
  filterProperties: ['name','synopsis','order','courseId','createdAt','updatedAt'],
  listProperties: ['id','name','order','courseId','courseId'],
  showProperties: ['id','name','synopsis','order','videoUrl','courseId','secondsLong','createdAt','updatedAt']
}

export const episodeResourceFeatures: FeatureType[] = [
  uploadFileFeature({
    provider: {
      local: {
        bucket: path.join(__dirname, '../../../uploads')
      }
    },
    properties: {
      key: 'videoUrl',
      file: 'uploadVideo'
    },
    uploadPath: (record, filename) => `videos/course-${record.get('courseId')}/${filename}`
  })
]