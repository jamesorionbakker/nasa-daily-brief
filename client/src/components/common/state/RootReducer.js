import {combineReducers} from 'redux'
import likeReducer from 'components/like_button/state/LikeReducer'


const rootReducer = combineReducers({
    likes: likeReducer,
})

export default rootReducer