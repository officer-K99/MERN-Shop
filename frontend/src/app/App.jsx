import { Container } from "react-bootstrap";
import Header from "../layout/header/index.tsx";
import Footer from "../layout/footer/index.tsx";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h2>store</h2>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
