import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { AiFillHeart, AiFillMessage } from 'react-icons/ai';
import { FiMusic } from 'react-icons/fi';
import { IoIosShareAlt } from 'react-icons/io';

import Avatar from '~/components/Avatar/Avatar';
import Button from '~/components/Button';
import { video } from '~/services/videoService';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    const [listVideos, setListVideos] = useState([]);
    // const [loadVideos, setLoadVideos] = useState(false);
    useEffect(() => {
        const fetchVideo = async () => {
            const videos = await video('for-you', 1);
            setListVideos(videos);
        };
        fetchVideo();
    }, []);

    const handleLikes = (event, video) => {
        event.target.style.color = 'var(--primary-color)';
        console.log(video);
    };

    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                {listVideos.map((video) => (
                    <div className={cx('player')} key={video.id}>
                        <Avatar className={cx('player-avatar')} src={video.user.avatar} size={'56px'} />
                        <div className={cx('player-content')}>
                            <div className={cx('player-info')}>
                                <p>
                                    <span className={cx('player-nickname')}>{video.user.nickname}</span>{' '}
                                    {video.user.first_name + ' ' + video.user.last_name}
                                </p>
                                <Button className={cx('btn-follow')} outline text small>
                                    Follow
                                </Button>
                                <p>{video.description}</p>
                                <p className={cx('player-music')}>
                                    <FiMusic />
                                    {video.music}
                                </p>
                            </div>
                            <div className={cx('player-video')}>
                                <a href={video.file_url}>
                                    <img className={cx('player-thumb')} src={video.thumb_url} alt="" />
                                </a>
                                {/* <video className={cx('video')} controls loop autoPlay>
                                        <source src={video.file_url} type="video/mp4" />
                                    </video> */}
                                <div className={cx('player-action')}>
                                    <button
                                        className={cx('btn-action')}
                                        onClick={(event, video) => handleLikes(event, video)}
                                    >
                                        <div className={cx('icon')}>
                                            <AiFillHeart />
                                        </div>
                                        <strong className={cx('quantity')}>{video.likes_count}</strong>
                                    </button>
                                    <button className={cx('btn-action')}>
                                        <div className={cx('icon')}>
                                            <AiFillMessage />
                                        </div>
                                        <strong className={cx('quantity')}>{video.comments_count}</strong>
                                    </button>
                                    <button className={cx('btn-action')}>
                                        <div className={cx('icon')}>
                                            <IoIosShareAlt />
                                        </div>
                                        <strong className={cx('quantity')}>{video.shares_count}</strong>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
