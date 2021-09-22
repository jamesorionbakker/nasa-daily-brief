const initialState = {}

export default function likeReducer(state = initialState, action){
    switch(action.type){
        case 'LIKES/LIKE':
            return {...state, [action.payload]: true};
        case 'LIKES/UNLIKE':
            return {...state, [action.payload]: false};
        case 'LIKES/SET':
            return {...action.payload}
        default:
            return {...state };
    }
}