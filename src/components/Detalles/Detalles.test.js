import React from "react";
import { shallow } from "enzyme";
import Detalles from "./Detalles";

describe("Detalles", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Detalles />);
    expect(wrapper).toMatchSnapshot();
  });
});
