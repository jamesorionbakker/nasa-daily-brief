import * as API from '../../api.js';
import dayjs from 'dayjs';

export const getInitialPosts = () => {
    return async (dispatch, getState) => {
        let startDate = getState().posts.startDate;
        let posts = await API.get(
            `/images/?end_date=${dayjs().format('YYYY-MM-DD')}&start_date=${startDate.format(
                'YYYY-MM-DD'
            )}`
        );
        dispatch({
            type: 'POSTS/INSERT',
            payload: posts,
        });
        dispatch({ type: 'POSTS/SET_LOADED' });
    };
};

export const getMorePosts = () => {
    return async (dispatch, getState) => {
        let requestEndDate = getState().posts.startDate.subtract(1, 'day');
        let requestStartDate = requestEndDate.subtract(4, 'day');
        dispatch({
            type: 'POSTS/SET_LOADING_MORE'
        })
        let posts = await API.get(
            `/images/?end_date=${requestEndDate.format(
                'YYYY-MM-DD'
            )}&start_date=${requestStartDate.format('YYYY-MM-DD')}`
        );

        dispatch({
            type: 'POSTS/SET_START_DATE',
            payload: requestStartDate
        })
        dispatch({
            type: 'POSTS/INSERT',
            payload: posts,
        });
        dispatch({ type: 'POSTS/SET_MORE_LOADED' });
    };
};