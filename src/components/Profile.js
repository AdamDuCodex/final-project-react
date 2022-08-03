import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import ProfileCard from "./ProfileCard";

export default function Profile() {

    const {
        loggedInUser: { name, email },
    } = useContext(UserContext);
    

    return (
        <>
            <ProfileCard cardTitle="Account Info">
                <div>Name: {loggedInUser.name}</div>
                <div>Email: {loggedInUser.email}</div>
            </ProfileCard>
            <ProfileCard cardTitle="Cart">
                <div>Cart</div>
            </ProfileCard>
            <ProfileCard cardTitle="Logout">
                <div>Logout</div>
            </ProfileCard>
        </>
    )
}