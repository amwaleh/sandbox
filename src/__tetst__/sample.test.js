import React from "react";
import Card from "../Card";
import { shallow, configure } from "enzyme";

it("should return 3", () => {
  expect(2 + 1).toBe(3);
});

it("should render", () => {
  const wrapper = shallow(<Card />);
  expect(wrapper).toHaveLength(1);
  expect(wrapper.find(".App")).toHaveLength(1);
});

it("should matchSnapshot", () => {
  const wrapper = shallow(<Card />);
  //expect(wrapper).toMatchSnapshot();
});
