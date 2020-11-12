import React from "react";
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Scroll from "./scroll";

it('Scroll component render', ()=>{
    expect(toJson(shallow(<Scroll />))).toMatchSnapshot();
})
