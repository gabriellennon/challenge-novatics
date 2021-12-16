import { Header } from "./components/Header";
import { Home } from "./screens/Home";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Home />
      <GlobalStyle/>
    </>
  );
}