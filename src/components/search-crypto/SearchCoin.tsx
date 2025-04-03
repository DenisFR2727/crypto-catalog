import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useCrypto } from '../../context/hooks';
import { Input } from 'antd';
const { Search } = Input;

import './search.css';
function SearchCoin() {
    const { searchQuery } = useCrypto();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        searchQuery(value);
    };

    return (
        <div className="search">
            <Search
                className="search__coin bg-gray-600 "
                placeholder="Search coin"
                onChange={handleChange}
                style={{ width: 470 }}
                enterButton={null}
                prefix={
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        className="text-gray-400 mr-2"
                    />
                }
            />
        </div>
    );
}
export default SearchCoin;
