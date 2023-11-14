import Routes from "./Routes";
import Navbar from "components/layout/Navbar";
import Footer from "components/layout/Footer";
import { BackToTop } from "components/global/BackToTop";

function App() {
  return (
    <>
      <Navbar />
        <Routes />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
