import { GET_USRS } from '../types/usersTypes';

const INITIAL_STATE = {
    usuarios: [] 
}

export default (state = INITIAL_STATE, action) => {
    switch ( action.type ) {
        case GET_USRS:
            return { ...state, usuarios: action.payload }       
        default: return state
    }
}