import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './search.css';
import { useCrypto } from '../../context/hooks';

function SearchCoin() {
    const { searchQuery } = useCrypto();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        searchQuery(value);
    };

    return (
        <div className="search">
            <FontAwesomeIcon
                className="search__icon"
                icon={faMagnifyingGlass}
            />
            <input
                className="search__coin bg-gray-600 "
                type="text"
                placeholder="Search"
                onChange={handleChange}
            />
        </div>
    );
}
export default SearchCoin;
