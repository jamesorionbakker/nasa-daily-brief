import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TypeWriter from 'react-typewriter';
import VisibilitySensor from 'react-visibility-sensor';
import dayjs from 'dayjs';
import LikeButton from '../like_button/LikeButton';
import './Post.scss';
import _ from 'lodash';

export default function PhotoCard(props) {
    let { post } = props;
    let [visible, setVisible] = useState(false);
    let [expanded, setExpanded] = useState(false);

    const visibilityChangeHandler = (isVisible) => {
        if (visible) return;
        setVisible(isVisible);
    };
    const toggleExpanded = () => {
        setExpanded(!expanded);
    };
    
    return (
        <VisibilitySensor partialVisibility onChange={visibilityChangeHandler}>
            <div className="image-container">
                <LikeButton date={post.date} />
                <Row>
                    <Col xs={12} md={4} className="text-container">
                        <h5>
                            <em>{dayjs(post.date).format('MMMM DD, YYYY')}</em>
                        </h5>
                        {visible && !expanded && (
                            <TypeWriter
                                maxDelay={40}
                                delayMap={[{ at: /(\.)/, delay: 300 }]}
                                typing={1}
                                fixed={true}>
                                <span>
                                    {_.truncate(post.explanation, {
                                        length: 350,
                                        separator: ' ',
                                        omission: ' ',
                                    })}
                                    <button className="link" onClick={toggleExpanded} href="#">
                                        ...Read More
                                    </button>
                                </span>
                            </TypeWriter>
                        )}
                        {visible && expanded && (
                            <span>
                                {post.explanation}{' '}
                                <button className="link" onClick={toggleExpanded} href="#">
                                    ...Show Less
                                </button>
                            </span>
                        )}
                    </Col>
                    <Col xs={12} md={8}>
                        <img
                            style={{ display: 'inline' }}
                            src={post.thumbnail_url || post.url}
                            alt={post.title}
                        />
                        <small>
                            {`image copyright ${post.copyright}`}{' '}
                            {post.hdurl && (
                                <a href={post.hdurl} rel='noreferrer' target="_blank">
                                    full size image
                                </a>
                            )}
                        </small>
                    </Col>
                </Row>
            </div>
        </VisibilitySensor>
    );
}
