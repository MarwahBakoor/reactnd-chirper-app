import React , {Component} from 'react'
import {connect} from 'react-redux'
import {handleAddTweet} from '../actions/tweets'

class NewTweet extends Component {
    state = {
        text:'',
    }
    handleChange = (e) => {
        const text = e.target.value;
        this.setState (()=> ({
            text
        }))
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        const {text} = this.state
        const { dispatch, id} = this.props

        dispatch(handleAddTweet(text,id))
        console.log(text)
        this.setState(()=> ({
            text:''
        }))
    }
    render (){
        const {text} = this.state
        {/* todo: Redirect to home veiw when submited */}
        const tweetLeft = 280 - text.length
        return (
            <div>
               <h3 className='center' > Compose new Tweet </h3> 
               <form className='new-tweet' onSubmit={(e)=> this.handleSubmit(e) }>
                   <textarea 
                    placeholder="what't happening?"
                    value={text}
                    onChange= {this.handleChange}
                    maxLength = {288}
                    className='textarea'
                   />
                   {tweetLeft <= 100 && (
                       <div className='tweet-length'>
                           {tweetLeft}
                       </div>
                   )}
                   <button className = 'btn' type='submit' disabled={text === ''}>
                       submit
                   </button>
               </form>
            </div>

        )
    }
}

export default connect()(NewTweet)