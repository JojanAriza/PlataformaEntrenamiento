// import adaptCourse from "@/adapters/adaptCourse";
import { curso } from "@/models/curso";
import { cursos } from "@/data/cursos";

// // import adaptCourse from "../adapters/adaptCourse";
// // import { curso } from "../models/curso";

// export default async function courseDetails(id: number): Promise<curso> {
//   const baseEndpoint = "http://localhost:3000/courses/";
//   const response = await fetch(baseEndpoint + id);

//   if (!response.ok) {
//     console.error("La consulta no fue exitosa");
//     const genericCourse: curso = {
//       id: -1,
//       tipo: "testCourse",
//       titulo: "Test de prueba",
//       estado: "testing",
//       color: "#C724B1",
//     };
//     return genericCourse;
//   }

//   const json = await response.json();
//   console.log("Respuesta cruda: ", json);
//   return adaptCourse(json);
// }

// async function main() {
//   try {
//     const curso = await courseDetails(2);
//     console.log(`${typeof curso}`);
//     console.log("Curso adaptado:", curso);
//   } catch (e) {
//     console.log(e);
//   }
// }

// main();



export default async function getCourseDetails(id: number): Promise<curso>{
  return cursos[id-1];
}