import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Image from '~/components/Image';
import styles from './Avatar.module.scss';

const cx = classNames.bind(styles);

function Avatar({ src, size = '32px', className }) {
    return (
        <div className={cx('avatar', className)} style={{ width: size, height: size }}>
            <Image src={src} className={cx('image')} alt={src} />
        </div>
    );
}

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    size: PropTypes.string,
};

export default Avatar;
