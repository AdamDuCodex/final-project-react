import { useContext } from "react"
import { userContext } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";

export default function AuthChecker(props) {
    const { loggedInUser } = useContext(userContext);

    if (!loggedInUser) {
        return <Navigate to="/login" />
    } else {
        return props.children;
    }
}