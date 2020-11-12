import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_FAIL, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS} from './Constants';

import * as reducers from './Reducers';

describe('search robots', ()=>{
    const initialStateSearch ={
        serachField : ''
    }

    it('should return the initial state', ()=>{
        expect(reducers.searchRobots(undefined, {})).toEqual({ serachField:''})
    })

    it('should handle change serchfield actions', ()=>{
        expect(reducers.searchRobots(initialStateSearch, {
            type: CHANGE_SEARCH_FIELD,
            payload:'abc'
        })).toEqual({ serachField:'abc'})
    })
})


describe('request Robots', ()=>{
    const initialStateRobots ={
        isPending : false,
        robots: [],
        error: ""
    }

    it('should return the initial state', ()=>{
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots)
    })

    it('should handle request robots pending action', ()=>{
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_PENDING,
        })).toEqual({ isPending:true, robots: [], error: ""})
    })

    it('should handle request robots Success action', ()=>{
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload:[{
                id:123,
                name:'test',
                email: 'test@gmail.com'
            }]
        })).toEqual({ isPending:false,
            robots: [{
            id:123,
            name:'test',
            email: 'test@gmail.com'
            }], 
            error: ""})
    })

    it('should handle request robots Failure action', ()=>{
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_FAIL,
            payload:[{
                id:123,
                name:'test',
                email: 'test@gmail.com'
            }]
        })).toEqual({ isPending:false,
            error: [{
            id:123,
            name:'test',
            email: 'test@gmail.com'
            }], 
            robots: []})
    })
    
})