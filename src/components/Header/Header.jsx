import "./Header.scss";

function Header(props){



    return(
        <header className="header">
            <h1 className="header__title">Snaps</h1>
            <button className="header__button">
                <p className="header__filter-text">Filters</p>
                <img src="src/assets/images/Filter.svg" alt="filter icon" className="header__filter-icon" />
            </button>
        
        </header>
    )
}

export default Header;