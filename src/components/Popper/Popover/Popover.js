import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { Wrapper as PopperWraper } from '~/components/Popper';
import Header from './Header';
import styles from './Popover.module.scss';
import MenuItem from './PopoverItem';

const cx = classNames.bind(styles);

function Menu({ children, items = [], hideOnClick = false, onChange }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.inner;

            return (
                <MenuItem
                    data={item}
                    key={index}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.inner]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, history.length - 1));
    };

    const renderMenu = (attrs) => (
        <div className={cx('wrapper')} tabIndex="-1" {...attrs}>
            <PopperWraper>
                {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                <div className={cx('body')}>{renderItems()}</div>
            </PopperWraper>
        </div>
    );

    const handleReset = () => setHistory((prev) => prev.slice(0, 1));

    return (
        <Tippy
            interactive
            delay={[0, 600]}
            placement="bottom-end"
            offset={[12, 12]}
            hideOnClick={hideOnClick}
            render={renderMenu}
            onHide={handleReset}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
