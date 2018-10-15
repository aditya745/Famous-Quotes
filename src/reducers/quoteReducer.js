import { FETCH_POSTS } from '../actions/types';

const initialState = {
    quotes: [],
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_POSTS:
        return {
            ...state,
            quotes: action.payload
        };
        default: 
         return state
    }
}