import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import CourseMosaic from "./views/CourseMosaic"
import CourseDetail from "./views/CourseDetail"
import CourseList from "./views/CourseList"
import SurveyPage from "./views/SurveyPage"



export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<CourseMosaic/>} index/>
                    <Route path="/student/list" element={<CourseList/>} index/>
                    <Route path="/student/detail" element={<CourseDetail/>} index/>
                    <Route path="/student/survey" element={<SurveyPage/>} index/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}