import React from "react";
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SearchBox from "./searchBox";

it('searchBox component render', ()=>{
    expect(toJson(shallow(<SearchBox />))).toMatchSnapshot();
})
