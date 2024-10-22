
const baseUrl = 'http://localhost:3000/'
const register = 'register' 

export class Fetch {
    static async register(data) {
       
        fetch(`${baseUrl}${register}`, {
            method: "POST", 
            body: data // Convert the data object to a JSON string
        }).then(response => {

            return response.json(); // Parse the JSON response
        }).then(data => {
                console.log('Success:', data); // Handle the successful response
            })
            .catch(error => {
                console.error('Error:', error); // Handle any errors
            });

    }
}