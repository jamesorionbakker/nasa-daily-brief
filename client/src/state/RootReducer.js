import {combineReducers} from 'redux'
import likeReducer from '../like_button/state/LikeReducer'
import postsReducer from '../posts/state/PostsReducer'


const rootReducer = combineReducers({
    likes: likeReducer,
    posts: postsReducer
})

export default rootReducer