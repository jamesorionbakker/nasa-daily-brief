import Container from 'react-bootstrap/Container';
import 'components/main.scss';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import dayjs from 'dayjs';
import Post from 'components/posts/Post';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getInitialPosts, getMorePosts } from './posts/state/PostActions';
import { getSavedLikes } from './like_button/state/LikeActions.js';

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

    return (
        <Container fluid>
            <header>
                <h1 className="title">NASA DAILY BRIEF</h1>
                <h1 className="time">{time.format('h:mm:ss')}</h1>
            </header>
            <main>
                {!initialPostsLoaded && <i className="fas fa-atom fa-spin loading-icon"></i>}
                {initialPostsLoaded &&
                    posts.map((post) => {
                        return <Post key={post.date} post={post} />;
                    })}
                {initialPostsLoaded && (
                        <Button
                            className="load-more-button"
                            onClick={() => dispatch(getMorePosts())}>
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
