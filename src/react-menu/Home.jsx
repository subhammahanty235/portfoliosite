import React from "react";
import dp from '../images/dp.jpeg'
import { NavLink } from 'react-router-dom'
import Common from "./Common";
function Home() {
    return (
        <>
            <Common title="Hello , Myself " img={dp} para="I am a web deigner and Programmer......" link="/About" btntext="About Me" />
        </>
    );
}

export default Home;

