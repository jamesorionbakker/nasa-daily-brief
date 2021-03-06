import Container from 'react-bootstrap/Container';
import 'components/main.scss';
import Button from 'react-bootstrap/Button';
import Post from 'components/posts/Post';
import { useInfiniteQuery } from 'react-query';
import axios from 'axios';
import Clock from 'components/clock/Clock';

export default function App() {
    let startingPage = 0;
    let posts = useInfiniteQuery(
        'posts',
        async ({ pageParam = startingPage }) => {
            let { data } = await axios.get(`/posts/?page=${pageParam}`);
            data.nextId = pageParam + 1;
            data.previousId = pageParam > 0 ? pageParam - 1 : null;
            return data;
        },
        {
            getPreviousPageParam: (firstPage) => firstPage.previousId ?? false,
            getNextPageParam: (lastPage) => lastPage.nextId ?? false,
        }
    );
    
    return (
        <Container fluid>
            <header>
                <h1 className="title">NASA DAILY BRIEF</h1>
                <Clock/>
            </header>
            <main>
                {!posts.isFetched && <i className="fas fa-atom fa-spin loading-icon"></i>}
                {posts.isFetched &&
                    posts.data.pages.map((page) => {
                        return page.map((post) => {
                            return <Post key={post.date} post={post} />;
                        });
                    })}

                {posts.isFetched && posts.hasNextPage &&(
                    <Button
                        className="load-more-button"
                        onClick={() => {
                            posts.fetchNextPage();
                        }}>
                        {posts.isFetchingNextPage ? 'Loading...' : 'Load More'}
                    </Button>
                )}
            </main>
            {posts.isFetched && (
                <footer>Content Courtesy of NASA APOD API • Copyright 2021 James Bakker</footer>
            )}
        </Container>
    );
}
