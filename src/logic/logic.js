import { registerFailure, registerSuccess, registerLoading } from "../redux/actions/register_actions.js";

const baseUrl = "http://localhost:3000/";
const register = "register";

export class Fetch {
    static async register(data) {
        fetch(`${baseUrl}${register}`, {
            method: "post",
            body: data,
        })
            .then((response) => response.json())
            .then((data) => data)
            .catch((error) => {
                console.log("Error:", error.response.data.message);
                return error.message
            });
    }
}