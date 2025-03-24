import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseMosaic from "./views/CourseMosaic"
import CourseDetail from "./views/CourseDetail"
import CourseList from "./views/CourseList"
import SurveyPage from "./views/SurveyPage"
import { EstudianteView } from "./layout/EstudianteView";
// import Testing from "./components/testing";



export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<EstudianteView/>}>
                    <Route path="/" element={<CourseMosaic/>} index/>
                    <Route path="/student/list" element={<CourseList/>} index/>
                    <Route path="/student/detail" element={<CourseDetail/>} index/>
                    <Route path="/student/survey" element={<SurveyPage/>} index/>
                    {/* <Route path="/testing/" element={<Testing/>}/> */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}