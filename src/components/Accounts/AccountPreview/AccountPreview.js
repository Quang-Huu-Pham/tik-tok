import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Avatar from '~/components/Avatar/Avatar';
import Button from '~/components/Button';
import { CheckIcon } from '~/components/Icons';
import styles from './Preview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview({ account }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Avatar src={account.avatar} size="44px" />
                <Button primary>Follow</Button>
            </div>
            <div className={cx('body')}>
                <div className={cx('title')}>
                    <h4 className={cx('username')}>{account.nickname}</h4>
                    {account.tick ? (
                        <div className={cx('icon')}>
                            <CheckIcon />
                        </div>
                    ) : (
                        ''
                    )}
                </div>
                <p className={cx('subtitle')}>{account.first_name + ' ' + account.last_name}</p>
                <div className={cx('analytics')}>
                    <strong className={cx('value')}>{account.followers_count}</strong>
                    <span className={cx('desc')}>Follower</span>
                    <strong className={cx('value')}>{account.likes_count}</strong>
                    <span className={cx('desc')}>Like</span>
                </div>
            </div>
        </div>
    );
}

AccountPreview.propTypes = {
    account: PropTypes.object.isRequired,
};

export default AccountPreview;
