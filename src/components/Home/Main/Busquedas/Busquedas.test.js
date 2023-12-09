import React from "react";
import { shallow } from "enzyme";
import Busquedas from "./Busquedas";

describe("Busquedas", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Busquedas />);
    expect(wrapper).toMatchSnapshot();
  });
});
