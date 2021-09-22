export const like = (payload) => {
    return async (dispatch, getState) => {
        dispatch({
            type: 'LIKES/LIKE',
            payload: payload,
        });
        let likes = getState().likes;
        localStorage.setItem('likes', JSON.stringify({ ...likes, [payload]: true }));
    };
};

export const unLike = (payload) => {
    return async (dispatch, getState) => {
        dispatch({
            type: 'LIKES/UNLIKE',
            payload: payload,
        });
        let likes = getState().likes;
        localStorage.setItem('likes', JSON.stringify({ ...likes, [payload]: false }));
    };
};

export const getSavedLikes = () => {
    return async (dispatch, getState) => {
        try {
            let savedLikes = JSON.parse(localStorage.getItem('likes'));
            console.log(savedLikes);
            dispatch({
                type: 'LIKES/SET',
                payload: savedLikes,
            });
        } catch (error) {
            console.log(error);
        }
    };
};
