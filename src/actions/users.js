export const RECEIVE_USERS = 'RECEIVE_USERS';

export function reciveUsers (users){
    return {
        type:RECEIVE_USERS,
        users
    }
}
