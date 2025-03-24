import { Layout, LayoutProps } from "../layout/Layout";

const params: LayoutProps = {
  pages: [
    { label: "Mi perfil", url: "#profile" },
    { label: "Mi aprendizaje", url: "/" },
  ],
  startPage: 1,
};

export const EstudianteView: React.FC<{}> = () => <Layout {...params} />;
