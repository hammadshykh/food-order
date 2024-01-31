import Container from "../../Components/Container";
import Header from "../Header";
import Footer from "../Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Container>
        <Header />
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
};

export default MainLayout;
