import React from "react";
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CardList from "./cardList";

const mockRobots=[{
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz'
}]

it('cardList component render', ()=>{
    expect(toJson(shallow(<CardList robots={mockRobots}/>))).toMatchSnapshot();
})
