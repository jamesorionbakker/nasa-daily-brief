import {combineReducers} from 'redux'
import likeReducer from 'components/like_button/state/LikeReducer'
import postsReducer from 'components/posts/state/PostsReducer'


const rootReducer = combineReducers({
    likes: likeReducer,
    posts: postsReducer
})

export default rootReducer