import React from "react";
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MainPage from "./MainPage";

let wrapper;
beforeEach(()=>{
    const mockProps ={
        onRequestRobots : jest.fn(),
        serachField : '',
        onSearchChange : jest.fn(), 
        robots: [], 
        isPending: false
    }
    wrapper = shallow(<MainPage {...mockProps}/>);
})

it('Mainpage component render', ()=>{
    expect(toJson(wrapper)).toMatchSnapshot();
})

it('filters robots correctly', ()=>{
    const mockProps2 ={
        onRequestRobots : jest.fn(),
        serachField : 'a',
        onSearchChange : jest.fn(), 
        robots: [{
            id:3,
            name:'john',
            email: 'john@gmail.co,',
        }], 
        isPending: false
    }
    const wrapper2 = shallow(<MainPage {...mockProps2}/>);
    expect(wrapper.instance().filterRobots()).toEqual([]);
    expect(wrapper2.instance().filterRobots()).toEqual([]);
})