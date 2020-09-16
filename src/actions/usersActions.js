import axios from 'axios';

export const getUsers = () => async (dispach) => {
    const resp = await axios.get('https://jsonplaceholder.typicode.com/users')

    dispach({
        type: 'get_users',
        payload: resp.data
    });
}