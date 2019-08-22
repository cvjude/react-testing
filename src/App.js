import React, { Component } from "react";
import Header from "./components/Header";
import Headline from "./components/Headline";
import "./app.scss";

const temp = [
  {
    fName: "Joe",
    lNAme: "Bloggs",
    email: "joebloggs@gmail.com",
    age: 24,
    onlineStatus: true
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            desc="Click the button to render posts!"
            tempArray={temp}
          />
        </section>
      </div>
    );
  }
}

export default App;
