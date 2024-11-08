import React from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='w-full h-screen bg-zinc-900 text-white'>
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
