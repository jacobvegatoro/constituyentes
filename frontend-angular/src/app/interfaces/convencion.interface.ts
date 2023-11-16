export interface Convencion {
    status: string
    data: Data
  }
  
  export interface Data {
    integrantes: Integrante[]
  }
  
  export interface Integrante {
    _id: string
    entity: string
    content: Content
  }
  
  export interface Content {
    name: string
    image: string
  }