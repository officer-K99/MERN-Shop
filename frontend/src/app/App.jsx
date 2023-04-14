import { Container } from "react-bootstrap";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Home from "../pages/Home/Home.jsx";
const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Home />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
