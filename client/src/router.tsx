import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseDetail from "./views/CourseDetail"
import CourseList from "./views/CourseList"
import SurveyPage from "./views/SurveyPage"
import EstudianteView  from "./views/EstudianteView";
import MiAprendizaje from "./views/MiAprendizaje";
import Profile from "./views/Profile";



export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<EstudianteView/>}>
                    <Route path="/" element={<MiAprendizaje/>} index/>
                    <Route path="/student/list" element={<CourseList/>} index/>
                    <Route path="/student/detail" element={<CourseDetail/>} index/>
                    <Route path="/student/survey" element={<SurveyPage/>} index/>
                    <Route path="/student/profile" element={<Profile/>} index/>
                    {/* <Route path="/testing/" element={<Testing/>}/> */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}