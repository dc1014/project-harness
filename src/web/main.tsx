import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import FeatureGrid from "./components/FeatureGrid";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProductLine from "./components/ProductLine";

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Hero />
      <FeatureGrid />
      <ProductLine />
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
