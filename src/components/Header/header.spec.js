import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import { findBytestAttr } from "./../../../helper";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header components tests", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render without errors", () => {
    const wrapper = findBytestAttr(component, "headerComponent");
    expect(wrapper.length).toBe(1);
  });

  it("should render a logo", () => {
    const logo = findBytestAttr(component, "logoImg");
    expect(logo.length).toBe(1);
  });
});
