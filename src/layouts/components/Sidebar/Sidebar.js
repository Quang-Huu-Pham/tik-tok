import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';

import Accounts from '~/components/Accounts';
import { HomeIcon, LiveIcon, UserGroupIcon } from '~/components/Icons';
import * as accountService from '~/services/accountService';

const cx = classNames.bind(styles);

function Sidebar() {
    const [suggestedAccounts, setSuggestedAccounts] = useState([]);
    // const [followingsAccount, setFollowingsAccount] = useState([]);
    const [loading, setLoading] = useState(1);
    const [more, setMore] = useState(false);

    useEffect(() => {
        const fetchApi = async () => {
            const suggested = await accountService.suggestedAccount(loading, 5);
            // const following = await accountService.followingsAccount(loading);

            setSuggestedAccounts((suggestedAccounts) => [...suggestedAccounts, ...suggested]);
            // setFollowingsAccount((followingsAccount) => [...followingsAccount, ...following]);
        };
        fetchApi();
    }, [loading]);

    const handleViewChange = () => {
        if (!more) {
            setLoading(loading + 1);
        } else {
            setSuggestedAccounts([]);
            // setFollowingsAccount([]);
            setLoading(loading - 1);
        }
        setMore(!more);
    };

    return (
        <aside className={cx('container')}>
            <div className={cx('wrapper')}>
                <Menu>
                    <MenuItem title="Dành cho bạn" to={config.routes.home} icon={<HomeIcon />} />
                    <MenuItem title="Đang Follow" to={config.routes.following} icon={<UserGroupIcon />} />
                    <MenuItem title="LIVE" to={config.routes.Live} icon={<LiveIcon />} />
                </Menu>
                <Accounts
                    label="Tài khoản được đề xuất"
                    btnTitle="Xem tất cả"
                    data={suggestedAccounts}
                    onViewChange={handleViewChange}
                    more={more}
                    popup
                ></Accounts>
                <Accounts
                    label="Các tài khoản đang follow"
                    btnTitle="Xem thêm"
                    data={suggestedAccounts}
                    onViewChange={handleViewChange}
                    more={more}
                    popup
                ></Accounts>
            </div>
        </aside>
    );
}

export default Sidebar;
