import CourseMosaic from "./components/CourseMosaic/CourseMosaic"
// import CourseDetail from "./components/CourseDetail"
import CourseList from "./components/CourseList/CourseList"
import Layout from "./components/layout/Layout"
import SurveyPage from "./components/survey/SurveyPage"
function App() {
  return (
    <>
      <Layout>
        <CourseMosaic/>
        {/* <CourseList/> */}
        {/* <SurveyPage/> */}
      </Layout>
    </>
  )
}

export default App
