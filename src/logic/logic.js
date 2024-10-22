const baseUrl = "http://localhost:3000/";
const register = "register";
export class Fetch {
  static async register(data) {
    fetch(`${baseUrl}${register}`, {
      method: "post", // Specify the request method
  
      body:data, // Convert the data object to a JSON string
    })  
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.json()}`); // Handle HTTP errors
        }
        console.log("Response:", response); // Log the response
        return response.json(); // Parse the JSON response
      })
      .then((data) => {
        console.log("Success:", data); // Handle the successful response
      })
      .catch((error) => {
        console.error("Error:efwfw", error); // Handle any errors
      });
  }
}
