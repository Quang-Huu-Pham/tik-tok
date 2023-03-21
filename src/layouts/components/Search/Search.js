import TippyHeadless from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import AccountItem from '~/components/AccountItem';
import { CloseIcon, SearchIcon } from '~/components/Icons';
import { Wrapper as PopperWraper } from '~/components/Popper';
import { useDebounce } from '~/hooks';
import * as searchService from '~/services/searchService';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [loading, setLoading] = useState(false);

    const debouncedValue = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (!debouncedValue) {
            setSearchResults([]);
            return;
        }

        setLoading(true);

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchService.search(debouncedValue, 'less');

            setSearchResults(result);
            setLoading(false);
        };
        fetchApi();
    }, [debouncedValue]);

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(e.target.value);
        }
    };

    return (
        // Using a wrapper <div> tag around the reference element
        // solves this by creating a new parentNode context.
        <div>
            <TippyHeadless
                interactive
                visible={showResults && searchResults.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWraper>
                            <span className={cx('title')}>Tài khoản</span>
                            {searchResults.map((account) => (
                                <AccountItem account={account} key={account.id} />
                            ))}
                        </PopperWraper>
                    </div>
                )}
                onClickOutside={() => setShowResults(false)}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        onFocus={() => setShowResults(true)}
                        onChange={handleChange}
                        placeholder="Tìm kiếm tài khoản và video"
                    />
                    {!loading && searchResults.length > 0 && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <CloseIcon />
                        </button>
                    )}
                    {loading && (
                        <div className={cx('loading')}>
                            <AiOutlineLoading3Quarters />
                        </div>
                    )}
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </TippyHeadless>
        </div>
    );
}

export default Search;
