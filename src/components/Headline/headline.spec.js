import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";

import { findBytestAttr } from "./../../../helper";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("headline component tests", () => {
  describe("Should render with props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Desc"
      };
      wrapper = setUp(props);
    });

    it("should render without error", () => {
      const component = findBytestAttr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(1);
    });

    it("should an H1", () => {
      const component = findBytestAttr(wrapper, "header");
      expect(component.length).toBe(1);
    });

    it("should a decription", () => {
      const component = findBytestAttr(wrapper, "desc");
      expect(component.length).toBe(1);
    });
  });

  describe("Should render with no props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it("should not render", () => {
      const component = findBytestAttr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(0);
    });
  });
});
