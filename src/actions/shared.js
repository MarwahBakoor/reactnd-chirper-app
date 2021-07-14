import { getInitialData } from '../utils/api';
import { reciveUsers} from './users';
import { reciveTweets } from './tweets';
import {setAuthedUser} from './authedUser';


export const AUTHED_ID = 'tylermcginnis';


export function handleInitialData(){
    return (despatch) => {
        return getInitialData()
        .then(({users,tweets}) => {
            despatch(reciveUsers(users))
            despatch(reciveTweets(tweets))
            despatch(setAuthedUser(AUTHED_ID))
        })
    }
}