import classNames from 'classnames/bind';
// import PropTypes from 'prop-types';
import styles from './Action.module.scss';

const cx = classNames.bind(styles);

function Actions({ icon, content, className }) {
    return (
        <button className={cx('wrapper')}>
            <div className={cx('icon')}>{icon}</div>
            <strong className={cx('content')}>{content}</strong>
        </button>
    );
}

// Actions.propTypes = {
//     icon: PropTypes.node,
//     content: PropTypes.string,
//     className: PropTypes.string,
// };

export default Actions;
