import { Layout, LayoutProps } from "./Layout";

const params: LayoutProps = {
  pages: [
    { label: "Mi perfil", url: "#profile" },
    { label: "Mi aprendizaje", url: "#learning" },
  ],
  startPage: 1,
};

export const EstudianteView: React.FC<{}> = () => <Layout {...params} />;
