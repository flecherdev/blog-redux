export const getUsers = () => (dispach) => {
    dispach({
        type: 'get_users',
        payload: [1, 2, 3]
    });
}