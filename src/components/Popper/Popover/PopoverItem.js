import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Popover.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });

    return (
        <div className={classes} onClick={onClick}>
            <span className={cx('menu-icon')}>{data.icon}</span>
            <p>{data.title}</p>
        </div>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
