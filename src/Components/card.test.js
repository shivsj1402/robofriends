import React from "react";
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Card from "./card";

it('card component', ()=>{
    expect(toJson(shallow(<Card />))).toMatchSnapshot();
})
