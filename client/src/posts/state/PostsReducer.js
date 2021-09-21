import dayjs from 'dayjs';

const initialState = { 
    startDate: dayjs().subtract(4, 'day'), 
    initialPostsLoaded: false,
    loadingMore: false,
    data: [] 
};

export default function postsReducer(state = initialState, action) {
    switch (action.type) {
        case 'POSTS/INSERT':
            return {...state, data: [...state.data, ...action.payload]};
        case 'POSTS/SET_LOADED':
            return {...state, initialPostsLoaded: true}
        case 'POSTS/SET_MORE_LOADED':
            return {...state, loadingMore: false}
        case 'POSTS/SET_LOADING_MORE':
            return {...state, loadingMore: true}
        case 'POSTS/SET_START_DATE':
            return {...state, startDate: action.payload}
        default:
            return {...state};
    }
}