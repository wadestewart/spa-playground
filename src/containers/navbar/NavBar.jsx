import React from 'react';
import { clearJwtToken } from '../../utils/cookieManager';

const NavBar = () => {
    const handleLogout = () => {
        clearJwtToken();
    };
    return (
        <div>
            <button
                type="button"
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    );
}

export default NavBar;
