import { Users } from "./testData";

export const fetchTestUserDataByEmail = (email) => {
    return user = Users.find((user) => user.email === email);
}