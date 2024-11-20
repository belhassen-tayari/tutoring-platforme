import { Component } from "react";
import Home from "./sections/Home";
import About from "./sections/About";
import Teacher from "./sections/Teachers";
import Subjects from "./sections/Subjects";
import Feedback from "./sections/Feedback";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default class Landing extends Component {
  render() {
    return (
      <div className="w-screen">
        <section id="home">
          <Home></Home>
        </section>
        <section id="about">
          {" "}
          <About></About>
        </section>
        <section id="teacher">
          <Teacher></Teacher>
        </section>
        <section id="subjects">
          {" "}
          <Subjects></Subjects>
        </section>
        <section id="feedback">
          {" "}
          <Feedback></Feedback>
        </section>
        <section id="contact">
          {" "}
          <Contact></Contact>
        </section>
        <section id="footer">
          {" "}
          <Footer></Footer>
        </section>
      </div>
    );
  }
}
