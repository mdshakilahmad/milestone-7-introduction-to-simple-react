import { Toaster } from "react-hot-toast";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Header></Header>
      <Banner></Banner>
      <Recipes></Recipes>
    </>
  );
}

export default App;
