import TippyHeadless from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import { Wrapper as PopperWraper } from '~/components/Popper';
import Avatar from '../Avatar/Avatar';
import { CheckIcon } from '../Icons';
import AccountPreview from './AccountPreview';
import styles from './Accounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ data, popup }) {
    const renderPreview = (attrs) => (
        <div className={cx('preview')} tabIndex="-1" {...attrs}>
            <PopperWraper>
                <AccountPreview account={data} />
            </PopperWraper>
        </div>
    );

    return (
        <div>
            <TippyHeadless
                interactive
                offset={[-25, 0]}
                placement="bottom"
                delay={[800, 0]}
                render={popup ? renderPreview : () => null}
            >
                <div className={cx('account')}>
                    <Avatar src={data.avatar} />
                    <div className={cx('account-info')}>
                        <div className={cx('account-heading')}>
                            <h4 className={cx('account-title')}>{data.nickname}</h4>
                            {data.tick && (
                                <div className={cx('icon')}>
                                    <CheckIcon />
                                </div>
                            )}
                        </div>
                        <p className={cx('account-subtitle')}>{data.first_name + ' ' + data.last_name}</p>
                    </div>
                </div>
            </TippyHeadless>
        </div>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
    popup: PropTypes.bool,
};

export default AccountItem;
