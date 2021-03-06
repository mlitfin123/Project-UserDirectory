import axios from "axios";
// Export an object containing methods we'll use for accessing the Random User API
export default {
    getEmployees: function() {
        return axios.get('https://randomuser.me/api/?inc=name,email,dob,picture,phone&nat=us&results=50');
    }
};