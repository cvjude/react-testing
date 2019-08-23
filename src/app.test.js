import App from "./App";
import { shallow } from "enzyme";
import React from "react";
import { findBytestAttr, testStore } from "./../helper";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe("App component test", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: "Example title 1",
          body: "Some test"
        },
        {
          title: "Example title 2",
          body: "Some test"
        },
        {
          title: "Example title 3",
          body: "Some test"
        }
      ]
    };
    wrapper = setUp(initialState);
  });

  it("Should render without errors", () => {
    const component = findBytestAttr(wrapper, "appComponent");
    expect(component.length).toBe(1);
  });
});
