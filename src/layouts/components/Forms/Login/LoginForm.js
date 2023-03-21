import classNames from 'classnames/bind';
import Button from '~/components/Button';
import Modal from '~/components/Modal';
import styles from './LoginForm.module.scss';

const cx = classNames.bind(styles);

function LoginForm({ trigger }) {
    return (
        <Modal trigger={trigger}>
            <div className={cx('wrapper')}>
                <div className={cx('form')}>
                    <h2 className={cx('header')}>Đăng nhập vào TikTok</h2>
                    <div className={cx('wrap-input')}>
                        <input type="text" name="" className={cx('input')} required />
                        <label htmlFor="" className={cx('label')}>
                            Email
                        </label>
                    </div>
                    <div className={cx('wrap-input')}>
                        <input type="password" name="" className={cx('input')} required />
                        <label htmlFor="" className={cx('label')}>
                            Password
                        </label>
                    </div>
                    <Button primary rounded className={cx('btn-form')}>
                        Đăng nhập
                    </Button>
                    <p className={cx('footer')}>
                        Bạn không có tài khoản?{' '}
                        <a href="http://" className={cx('sigup')}>
                            Đăng ký
                        </a>
                    </p>
                </div>
            </div>
        </Modal>
    );
}

export default LoginForm;
