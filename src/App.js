import React from "react";
import Post from "./Components/Post";
import Header from "./Components/Header";
import "./App.css";

class HelloWorld extends React.Component {
  render() {
    let name = "Olim";

    const edit = (ism) => {
      console.log(name);
      name = ism;
      console.log(name);
    };

    const loger = () => {
      console.log("Chiqdi");
    };

    return (
      <>
        <Header />
        <h1>{name} Salom!</h1>
        <p>lorem</p>
        <Post edit={edit} loger={loger} masalan={name}></Post>
      </>
    );
  }
}

export default HelloWorld;
