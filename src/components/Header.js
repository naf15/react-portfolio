const Header = () => {
    return(
        <header>
            <h1>Nafis's Portfolio</h1>
            <nav class="nav-bar">
                <ul>
                <li><a href="/">About Me</a></li>
                <li>
                    <a target="_blank" href="https://github.com/naf15?tab=repositories"
                    >Github</a>                   
                </li>
                <li>
                    <a href="/portfolio" >Portfolio</a>
                </li>
                <li><a href="/contact-me">Contact Me</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;