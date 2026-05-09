import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="app-header">
            <h1>My site</h1>

            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>

                    <li>
                        <a href="/About">About</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;