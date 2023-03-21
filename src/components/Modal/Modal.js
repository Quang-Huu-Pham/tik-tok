import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

function Modal({ trigger, children }) {
    return (
        <Popup trigger={trigger} className={cx('test')} modal nested position="right center">
            <div className={cx('modal')}>{children}</div>
        </Popup>
    );
}

Modal.propTypes = {
    trigger: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
};

export default Modal;
