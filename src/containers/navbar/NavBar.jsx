import React from 'react';
import { clearJwtToken } from '../../utils/cookieManager';

const NavBar = props => {
    const handleSetUser = props.handleSetUser;
    const handleLogout = () => {
        clearJwtToken();
        handleSetUser({});
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
