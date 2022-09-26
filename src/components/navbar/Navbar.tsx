import React from 'react';
import styles from './Navbar.module.css';
import {Route, Routes, Link} from "react-router-dom";
import Main from "../../pages/main/Main";
import About from "../../pages/about/About";
import Timer from "../timer/Timer";
import Posts from "../../pages/posts/Posts";


const Navbar = () => {
    return (
        <nav>
            <div className={styles.navbar}>
                <Link to="/">Main</Link>
                <Link to="/about">About</Link>
                <Link to="/timer">Timer</Link>
                <Link to={"/posts"}>Posts</Link>
            </div>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/timer" element={<Timer />} />
                <Route path="/posts" element={<Posts />} />
            </Routes>
        </nav>

    );
};

export default Navbar