
const baseUrl = 'http://localhost:3000/'
const register = 'register' 
export class Fetch {

    static async register(data) {

        console.log(data)
        console.log('fewfw')
        fetch(`${baseUrl}${register}`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data) // Convert the data object to a JSON string
        }).then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`); // Handle HTTP errors
            }
            return response.json(); // Parse the JSON response
        }).then(data => {
                console.log('Success:', data); // Handle the successful response
            })
            .catch(error => {
                console.error('Error:', error); // Handle any errors
            });

    }
}