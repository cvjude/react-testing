import React from "react";
import { shallow } from "enzyme";
import { findBytestAttr, checkProps } from "./../../../helper";
import SharedButton from "./index";

describe("SharedButton component tests", () => {
  describe("Check prop types", () => {
    it("Should not throw an error", () => {
      const expectedprops = {
        buttonText: "Example Button",
        emitEvent: () => {}
      };

      const propsErr = checkProps(SharedButton, expectedprops);

      expect(propsErr).toBeUndefined();
    });
  });

  describe("Renders button", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        buttonText: "Example Button",
        emitEvent: () => {}
      };
      wrapper = shallow(<SharedButton {...props} />);
    });

    it("should render a button", () => {
      const button = findBytestAttr(wrapper, "buttonComponent");
      expect(button.length).toBe(1);
    });
  });
});
