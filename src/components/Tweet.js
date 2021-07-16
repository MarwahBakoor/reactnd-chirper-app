import React , {Component} from 'react'
import {connect} from 'react-redux'
import {formatTweet, formatDate} from '../utils/helpers'
import { TiArrowBackOutline } from 'react-icons/ti' 
import { TiHeartOutline } from 'react-icons/ti' 
import { TiHeartFullOutline } from 'react-icons/ti'
import {handleToggleTweet} from '../actions/tweets'
import {Link,withRouter} from 'react-router-dom'

class Tweet extends Component {
    toParent = (e,id) =>{
        e.preventDefault()
        this.props.history.push(`/tweet/${id}`)

    }

    handleLike = (e) => {
        e.preventDefault()
        const {dispatch, tweet, authedUser } = this.props
        dispatch(handleToggleTweet({
            id:tweet.id,
            hasLiked:tweet.hasLiked,
            authedUser
        }))
    }


    render(){
        const { tweet } = this.props

        if(tweet === null){
            return <p>This Tweet doesn't existd</p>
        }

        const {
            name,avatar,id, timestamp, text,hasLiked, likes, replies, parent
        } = tweet

        return (
            <Link to = {`/tweet/${id}`} className='tweet'>
                <img 
                src={avatar}
                alt = {`Avatar of ${name}`}
                className='avatar'
                />
                <div className = 'tweet-info'>
                    <div>
                        <span>{name}</span>
                        <div>{formatDate(timestamp)}</div>
                        {parent && (
                            <button className='replying-to' onClick={(e)=> this.toParent(e,parent.id)} >
                                Replying to @{parent.author}
                            </button>
                        )}
                        <p>{text}</p>
                        </div> 
                    <div className='tweet-icons'>
                        <TiArrowBackOutline className='tweet-icon' />
                        <span>{replies !== 0 && replies}</span>
                        <button className='heart-button' onClick={(e) => this.handleLike(e)} >
                            { hasLiked === true
                                ? <TiHeartFullOutline color='#e0245e' className='tweet-icon' />
                                : <TiHeartOutline className='tweet-icon' />
                            }
                        </button>    
                        <span>{likes !== 0 && likes}</span>  
                    </div>
                </div>

            </Link>
        )

    }
}


function mapStateToProps({authedUser, users,tweets}, {id} ){
    const tweet = tweets[id]
    const pareneTweet = tweet ? tweets[tweet.replyingTo] : null
    return {
        authedUser,
        tweet: tweet ?
        formatTweet(tweet, users[tweet.author],authedUser,pareneTweet)
        : null
    }
}

export default withRouter(connect(mapStateToProps)(Tweet))

