import { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import LabeledTextInput from "./LabeledTextInput";
import { fetchTestUserDataByEmail } from "../api/api";

const validUser = {
    id: 1,
    name: "Andrew",
    email: "andrew@gmail.com",
    password: "abc123"
}

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showLoginError, setshowLoginError] = useState(false);

    const {setLoggedInUser} = useContext(UserContext);
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        const user = fetchTestUserDataByEmail(email);
        if (user && password === validUser.password) {
            setshowLoginError(false);
            setLoggedInUser(user);
            navigate("/home");
        } else {
            setshowLoginError(true);
        }
    }

    return (
        <>
            <div>Login Page</div>
            <form onSubmit={handleSubmit}>
                <LabeledTextInput name="Email" value={email} setValue={setEmail} />
                <LabeledTextInput 
                    name="Password"
                    value={password}
                    setValue={setPassword}
                    inputType= "password"
                />
                <button primary type="submit">
                    Login
                </button>
            </form>
            {showLoginError && <div> User not found.</div>}
        </>
    )
}