import Container from 'react-bootstrap/Container';
import './app.scss';
import * as API from './api.js';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import dayjs from 'dayjs';
import Post from './posts/Post';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getInitialPosts, getMorePosts } from './posts/state/PostActions';
import { getSavedLikes } from './like_button/state/LikeActions.js';
import TypeWriter from 'react-typewriter';

export default function App() {
    const dispatch = useDispatch();
    let posts = useSelector((state) => state.posts.data);
    let initialPostsLoaded = useSelector((state) => state.posts.initialPostsLoaded);
    let loadingMore = useSelector((state) => state.posts.loadingMore);
    let [time, setTime] = useState(dayjs());

    useEffect(() => {
        dispatch(getInitialPosts());
        dispatch(getSavedLikes());
    }, []);

    useEffect(() => {
        let interval = setInterval(() => {
            setTime(dayjs());
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    });

    async function loadMore() {
        dispatch(getMorePosts());
    }

    return (
        <Container fluid>
            <header>
                <h1 className="title">NASA DAILY BRIEF</h1>
                <h1 className="time">
                    {time.format('h:mm:ss')}
                    {/* <span className="hms">{time.format('h')}</span>
                    <span className='colon'>:</span>
                    <span className="hms">{time.format('mm')}</span>
                    <span className='colon'>:</span>
                    <span className="hms">{time.format('ss')}</span> */}
                </h1>
            </header>
            <main>
                {!initialPostsLoaded && (
                    <i className="fas fa-atom fa-spin loading-icon"></i>
                )}
                {initialPostsLoaded &&
                    posts.map((post) => {
                        return <Post key={post.date} post={post} />;
                    })}
                {initialPostsLoaded && (
                    <Button className="load-more-button" onClick={loadMore}>
                        {loadingMore ? 'Loading...' : 'Load More'}
                    </Button>
                )}
            </main>
            {initialPostsLoaded && (
                <footer>Content Courtesy of NASA APOD API • Copyright 2021 James Bakker</footer>
            )}
        </Container>
    );
}
