import {  Outlet } from "react-router-dom";

import {  useUserContext } from "../context/UserContext";
import NavBar from "../components/NavBar";

const LayoutPrivate = () => {
    const { user } = useUserContext()
    //console.log(user);

    return user.email === "test@test.com" ? <><NavBar /><Outlet /></> : <></>;
};

export default LayoutPrivate;
