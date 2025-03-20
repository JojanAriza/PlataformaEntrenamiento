import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Course from "./views/Course"
import CourseDetail from "./views/CourseDetail"
import CourseList from "./views/CourseList"
import SurveyPage from "./views/SurveyPage"



export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Course/>} index/>
                    <Route path="/student/list" element={<CourseList/>} index/>
                    <Route path="/student/detail" element={<CourseDetail/>} index/>
                    <Route path="/student/survey" element={<SurveyPage/>} index/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}