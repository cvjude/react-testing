import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./components/Header";
import Headline from "./components/Headline";
import Button from "./components/Button";
import SinglePost from "./components/SinglePost";
import { fetchPosts } from "./actions";
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
  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
  }

  fetch = () => {
    this.props.fetchPosts();
  };

  render() {
    const { posts } = this.props;

    const configButton = {
      buttonText: "Get Posts",
      emitEvent: this.fetch
    };

    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            desc="Click the button to render posts!"
            tempArray={temp}
          />
          <Button {...configButton} />
          {posts.length > 0 && (
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configlist = {
                  title,
                  desc: body
                };

                return <SinglePost key={index} {...configlist} />;
              })}
            </div>
          )}
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(App);
