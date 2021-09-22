import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './LikeButton.scss';
import { like, unLike } from './state/LikeActions';

export default function LikeButton(props) {
    let dispatch = useDispatch();
    let { date } = props;
    let liked = useSelector((state) => state.likes[date]);

    function toggleLiked() {
        if (!liked) dispatch(like(date));
        else dispatch(unLike(date));
    }
    return (
        <div className="like-btn-container">
            <button
                aria-label={(liked ? 'un-like' : 'like')}
                className={'like-button ' + (liked ? 'liked' : 'not-liked')}
                onClick={toggleLiked}>
                <i aria-hidden='true' title={(liked ? 'un-like this post' : 'like this post')}className="fas fa-heart"></i>
            </button>
        </div>
    );
}
