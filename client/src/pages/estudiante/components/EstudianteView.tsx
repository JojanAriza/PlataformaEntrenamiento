import Layout, {LayoutProps } from "../../../components/Layout";

const params: LayoutProps = {
  pages: [
    { label: "Mi perfil", url: "/student/profile" },
    { label: "Mi aprendizaje", url: "/" },
  ],
  startPage: 1,
};


export default function EstudianteView() {
  return (
    <Layout {...params} />
  )
}