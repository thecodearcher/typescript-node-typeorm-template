import { Users } from "./userModel";

export class UserService {
    public getAllUsers = async () => {
        return await Users.find();
    }

}
