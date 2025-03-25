import CurrentCrypto from '../crypto/current-crypto';

import './header.css';
function Header() {
    return (
        <div className="header bg-gray-900">
            <CurrentCrypto />
        </div>
    );
}
export default Header;
