import React from "react";
import { shallow } from "enzyme";
import { findBytestAttr, checkProps } from "../../../helper";
import SinglePost from "./index";

describe("Single posts", () => {
  describe("Checking props", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        id: 1,
        title: "Example title",
        desc: "Some text"
      };

      const propsErr = checkProps(SinglePost, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe("Render component", () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        title: "Example title",
        desc: "Some text"
      };
      wrapper = shallow(<SinglePost {...props} />);
    });

    it("Should render without error", () => {
      const component = findBytestAttr(wrapper, "postComponent");
      expect(component.length).toBe(1);
    });

    it("Should render a title", () => {
      const title = findBytestAttr(wrapper, "postTitle");
      expect(title.length).toBe(1);
    });

    it("Should render a description", () => {
      const desc = findBytestAttr(wrapper, "postDescription");
      expect(desc.length).toBe(1);
    });
  });

  describe("Should not render", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: "Some text"
      };
      wrapper = shallow(<SinglePost {...props} />);
    });

    it("Component should not render", () => {
      const component = findBytestAttr(wrapper, "postComponent");
      expect(component.length).toBe(0);
    });
  });
});
