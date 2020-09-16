import axios from 'axios';
import { GET_USRS } from '../types/usersTypes';

export const getUsers = () => async (dispach) => {
    const resp = await axios.get('https://jsonplaceholder.typicode.com/users')

    dispach({
        type: GET_USRS,
        payload: resp.data
    });
}