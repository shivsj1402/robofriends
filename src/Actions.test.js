import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_FAIL, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS} from './Constants';

import * as actions from './Actions';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);

describe('Testing Actions', ()=>{

    it('should create an action to search robots', ()=>{
        expect(actions.setSerachField('abc')).toEqual({
            type: CHANGE_SEARCH_FIELD ,
            payload: 'abc'
        })
    })

    it('should create an action to request robots', ()=>{
        const store = mockStore();
        store.dispatch(actions.requestRobots())
        const action = store.getActions()
        expect(action[0]).toEqual({type: REQUEST_ROBOTS_PENDING})
    })
})