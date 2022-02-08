import React from "react";
import "./App.css";
import Cards from "../Cards/Cards";
import Footer from "../Footer";
import data from "../../data/footerData";
import Header from "../Header";
import Go from "../Go/Go";
import BigSection from "../Bigsection/BigSection";

function App() {
  return (
    <div className="App">
      <Header />
      <Go />
      <Cards />
      <BigSection />
      <Footer data={data} colProps="col-sm-6 col-md-4" />
    </div>
  );
}

export default App;
