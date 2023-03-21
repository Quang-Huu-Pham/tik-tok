import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Header from '~/layouts/components/Header';
import Home from '~/pages/Home';
import Sidebar from '../components/Sidebar';
import styles from './DeafaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <Sidebar />
                    <Home />
                </div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
