import uploadFileFeature from "@adminjs/upload";
import { FeatureType, ResourceOptions } from "adminjs";
import path from "path";
//configurando a navegação no adminJs para as opções de recurso da tabela Curso 
export const courseResourceOptions: ResourceOptions = {
  navigation: 'Catálogo',
  editProperties: ['name','synopsis','uploadThumbmail','featured','categoryId'],
  filterProperties: ['name','synopsis','featured','categoryId','createdAt','updatedAt'],
  listProperties: ['id','name','featured','categoryId'],
  showProperties: ['id','name','synopsis','thumbmailUrl','featured','categoryId','createdAt','updatedAt']
}
//configurando o upload de arquivos no adminJs para os recursos de features da tabela Curso 
export const courseResourceFeatures: FeatureType[] = [
  uploadFileFeature({
    properties: {
      key: 'thumbmailUrl',//propriedade da coluna na aplicação
      file: 'uploadThumbmail'//input no front end
    },
    //configurando o local a ser salvo o arquivo upado no frontend
    provider: {
      local: {//usado o 'local', mas também há como usar 'aws','gcp'
      bucket: path.join(__dirname, '../../../public')
    }
    /*__dirname pega a tabela atual do arquivo, após isso concatenamos
    com o join e enviamos o bucket para a pasta public, que será o caminho padrão deste arquivo*/
    },
    //configurando um caminho para onde o arquivo será salvo dentro do bucket
    uploadPath: (record, filename) => `thumbmails/course-${record.get('id')}/${filename}`
    /*uploadPath recebe dois argumentos, record e filename, record sendo o arquivo em si e o filename sendo o nome do arquivo upado*/
  })

]