import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import AccountItem from './AccountItem';
import styles from './Accounts.module.scss';

const cx = classNames.bind(styles);

function Accounts({ label, data = [], onViewChange, more, btnTitle, popup }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {data.map((account, index) => (
                <AccountItem popup={popup} data={account} key={index} />
            ))}
            <button className={cx('more')} onClick={onViewChange}>
                {!more ? `${btnTitle}` : 'Ẩn bớt'}
            </button>
        </div>
    );
}

Accounts.propTypes = {
    label: PropTypes.string.isRequired,
    btnTitle: PropTypes.string.isRequired,
    data: PropTypes.array,
    popup: PropTypes.bool,
};

export default Accounts;
