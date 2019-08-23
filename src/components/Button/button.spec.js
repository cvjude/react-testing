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
    let mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        buttonText: "Example Button",
        emitEvent: mockFunc
      };
      wrapper = shallow(<SharedButton {...props} />);
    });

    it("should render a button", () => {
      const button = findBytestAttr(wrapper, "buttonComponent");
      expect(button.length).toBe(1);
    });

    it("Should enmimt callback on click event", () => {
      const button = findBytestAttr(wrapper, "buttonComponent");
      button.simulate("click");
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    });
  });
});
