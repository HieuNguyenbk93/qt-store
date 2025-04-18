import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import TopBar from "@/Components/TopBar";
import { Layout } from "antd";

export default function DashboardLayout({ children }: Readonly<{children: React.ReactNode;}>) {
  return (
    <>
      <TopBar/>
      <NavBar/>
      <Layout>
        {children}
      </Layout>
      <Footer/>
    </>
  );
}