import axios from 'axios';
import { GET_USERS } from '../types/usersTypes';

export const getUsers = () => async (dispach) => {
    try {
        const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
    
        dispach({
            type: GET_USERS,
            payload: resp.data
        });
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
}