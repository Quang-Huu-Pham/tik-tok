import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import styles from './AccoutItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ account }) {
    return (
        <Link to={`/@${account.nickname}`} className={cx('wrapper')}>
            <Image src={account.avatar} alt="avt" className={cx('avatar')} />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    {account.full_name}{' '}
                    {account.tick ? (
                        <span className={cx('icon')}>
                            <BsFillPatchCheckFill />
                        </span>
                    ) : (
                        ''
                    )}
                </p>
                <span className={cx('user')}>{account.nickname}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    account: PropTypes.object.isRequired,
};

export default AccountItem;
