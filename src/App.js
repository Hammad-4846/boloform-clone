import React from "react";

import {
  About,
  Footer,
  Header,
  WorkFlows,
  Testimonials,
  Work,
} from "./container/index";

import { Navbar, Message } from "./components/index";

import "./App.scss";
import Feature from "./container/Feature/Feature";
import Support from "./container/Support/Support";
import FrequentlyQuestion from "./container/FreqentlyQuestion/FrequentlyQuestion";
import Costumer from "./container/Costumer/Costumer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Feature />
      <Testimonials />
      <WorkFlows />
      <Message />
      <Support />
      <FrequentlyQuestion />
      <Costumer/>
      <Footer />
    </div>
  );
}

export default App;
