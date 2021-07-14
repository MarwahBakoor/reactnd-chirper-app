
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';

export function reciveTweets (tweets){
    return {
        type:RECEIVE_TWEETS,
        tweets
    }
}