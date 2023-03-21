import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import 'tippy.js/dist/tippy.css';
import images from '~/assets/images';
import Button from '~/components/Button';
import {
    CoinIcon,
    DotsIcon,
    HelpIcon,
    KeyBoardIcon,
    LanguageIcon,
    LiveIcon,
    LogOutIcon,
    MessageIcon,
    NotificationIcon,
    PlusIcon,
    SettingIcon,
    UserIcon,
} from '~/components/Icons';
import Image from '~/components/Image';
import Menu from '~/components/Popper/Popover';
import config from '~/config';
import LoginForm from '../Forms/Login/LoginForm';
import Search from '../Search';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    const currentUser = false;

    const MENU_ITEMS = [
        {
            icon: <LanguageIcon />,
            title: 'Tiếng Việt',
            inner: {
                title: 'Language',
                data: [
                    { code: 'en', title: 'English' },
                    { code: 'vi', title: 'Việt Nam' },
                ],
            },
        },
        {
            icon: <HelpIcon />,
            title: 'Phản hồi và trợ giúp',
        },
        {
            icon: <KeyBoardIcon />,
            title: 'Phím tắt trên bàn phím',
        },
    ];

    const MENU_USER = [
        {
            icon: <UserIcon />,
            title: 'Xem hồ sơ',
            to: '/profile',
        },
        {
            icon: <CoinIcon />,
            title: 'Nhận xu',
            to: '/coin',
        },
        {
            icon: <LiveIcon width="2rem" height="2rem" />,
            title: 'LIVE Studio',
            to: '/live',
        },
        {
            icon: <SettingIcon />,
            title: 'Cài đặt',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <LogOutIcon />,
            title: 'Đăng xuất',
            to: '/logout',
            separate: true,
        },
    ];

    const handleOnChange = (item) => {
        console.log(item);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home}>
                    <img src={images.logo} alt="TikTok-Logo" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    <Button to={config.routes.upload} className={cx('outline-secondary')} leftIcon={<PlusIcon />}>
                        Tải lên
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy offset={[0, 4]} content="Tin Nhắn" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy offset={[0, 4]} content="Thông báo" placement="bottom">
                                <button className={cx('action-btn')} to="/messages">
                                    <NotificationIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <LoginForm trigger={<Button primary>Đăng nhập</Button>}></LoginForm>
                    )}
                    <Menu items={currentUser ? MENU_USER : MENU_ITEMS} onChange={handleOnChange}>
                        {currentUser ? (
                            <Image
                                src="https://hinhanhdephd.com/wp-content/uploads/2015/12/hinh-anh-dep-girl-xinh-hinh-nen-dep-gai-xinh.jpg"
                                className={cx('header-avatar')}
                                alt="avatar"
                            />
                        ) : (
                            <button className={cx('option')}>
                                <DotsIcon />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
