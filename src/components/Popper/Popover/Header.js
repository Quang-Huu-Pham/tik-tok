import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { FaChevronLeft } from 'react-icons/fa';
import styles from './Popover.module.scss';

const cx = classNames.bind(styles);

function Header({ title, onBack }) {
    return (
        <div className={cx('header-menu')}>
            <span className={cx('header-icon')} onClick={onBack}>
                <FaChevronLeft />
            </span>
            <h4 className={cx('header-title')}>{title}</h4>
        </div>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
};

export default Header;
