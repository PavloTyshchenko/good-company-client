import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import headerStyles from './header.module.scss';

const Header = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title} to="/">
                    {data.site.siteMetadata.title}
                    <img src="https://www.zechemodan.com/pics/tours/zahid/LOGO.png" alt="Zaxidfest"/>
                </Link>
            </h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link
                            className={headerStyles.navItem}
                            activeClassName={headerStyles.activeNavItem}
                            to="/">
                            Головна
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={headerStyles.navItem}
                            activeClassName={headerStyles.activeNavItem}
                            to="/companions">
                            Компаньйони
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={headerStyles.navItem}
                            activeClassName={headerStyles.activeNavItem}
                            to="/addForm">
                            Позначитися
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;