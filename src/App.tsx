import Logo from "./assets/logo.svg";
import { Container } from "./components";
import Calculator from "./views/Calculator";

const App = () => {
  return (
    <Container>
      <img src={Logo} alt="logo" />
      <Calculator />
    </Container>
  );
};

export default App;
