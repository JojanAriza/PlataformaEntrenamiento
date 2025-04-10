import { curso } from "@/models/curso";

export default function adaptCourse(resObj: any): curso {
  return {
    id: resObj.id,
    tipo: resObj.tipo,
    titulo: resObj.titulo,
    estado: resObj.estado,
    color: resObj.color,
  };
}