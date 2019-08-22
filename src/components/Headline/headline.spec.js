import React from "react";
import { shallow } from "enzyme";
import checkPropTypes from "check-prop-types";
import Headline from "./index";

import { findBytestAttr, checkProps } from "./../../../helper";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("headline component tests", () => {
  describe("Checking propTypes", () => {
    it("should not throw a warning", () => {
      const expectedprops = {
        header: "test Header",
        desc: "Test Description",
        tempArr: [
          {
            fName: "test fName",
            lName: "test lName",
            emal: "test@email.com",
            age: 23,
            onlineStatus: false
          }
        ]
      };

      const propsErr = checkProps(Headline, expectedprops);

      expect(propsErr).toBeUndefined();
    });
  });

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
