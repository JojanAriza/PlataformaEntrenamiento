import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseDetail from "@/pages/estudiante/pages/miAprendizaje/components/CourseDetail";
import CourseList from "@/pages/estudiante/pages/miAprendizaje/components/CourseList";
import SurveyPage from "@/pages/estudiante/pages/survey/components/SurveyPage";
import EstudianteView from "@/pages/estudiante/components/EstudianteView";
import MiAprendizaje from "@/pages/estudiante/pages/miAprendizaje/components/MiAprendizaje";
import Profile from "./pages/estudiante/pages/perfil/components/Profile";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<EstudianteView />}>
          <Route path="/" element={<MiAprendizaje />} index />
          <Route path="/student/list" element={<CourseList />} index />
          <Route path="/student/detail" element={<CourseDetail />} index />
          <Route path="/student/survey" element={<SurveyPage />} index />
          <Route path="/student/profile" element={<Profile />} index />
          {/* <Route path="/testing/" element={<Testing/>}/> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
