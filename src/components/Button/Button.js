import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = forwardRef(
    (
        {
            to,
            href,
            primary = false,
            secondary = false,
            outline = false,
            rounded = false,
            text = false,
            disable = false,
            small = false,
            large = false,
            children,
            className,
            leftIcon,
            rightIcon,
            onClick,
            ...passProps
        },
        ref,
    ) => {
        let Component = 'button';
        const props = {
            onClick,
            ...passProps,
        };

        if (disable) {
            Object.keys(props).forEach((key) => {
                if (key.startsWith('on') && typeof props[key] === 'function') {
                    delete props[key];
                }
            });
        }

        if (href) {
            props.href = href;
            Component = 'a';
        } else if (to) {
            props.to = to;
            Component = Link;
        }

        const classes = cx('wrapper', {
            [className]: className,
            primary,
            secondary,
            outline,
            rounded,
            disable,
            small,
            large,
        });
        return (
            <Component className={classes} ref={ref} {...props}>
                {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
                <span className={cx('desc')}>{children}</span>
                {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
            </Component>
        );
    },
);

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    text: PropTypes.bool,
    disable: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
};

export default Button;
