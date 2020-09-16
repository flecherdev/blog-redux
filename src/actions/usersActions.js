import axios from 'axios';
import { GET_USERS, LOADING, ERROR } from '../types/usersTypes';

export const getUsers = () => async (dispach) => {
    dispach({
        type: LOADING
    })

    try {
        const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
    
        dispach({
            type: GET_USERS,
            payload: resp.data
        });
    } catch (error) {
        console.log(`Error: ${error.message}`)
        dispach({
            type: ERROR,
            payload: error.message
        })
    }
}