import React from "react";
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CounterButton from "./counterButton";

it('CounterButton component render', ()=>{
    expect(toJson(shallow(<CounterButton />))).toMatchSnapshot();
})

it('correctly increment count', ()=>{
    const wrapper = shallow(<CounterButton />)
    wrapper.at(0).simulate('click')
    expect(wrapper.state()).toEqual({count:1});
    wrapper.at(0).simulate('click')
    wrapper.at(0).simulate('click')
    expect(wrapper.state()).toEqual({count:3});
})