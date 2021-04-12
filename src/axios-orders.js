import axios from 'axios';

const instance = axios.create({ // creates an axios instance and takes an object to configure it
    baseURL: 'https://burger-app-87735-default-rtdb.firebaseio.com/'

});

// now we have an axios instance configured for this URL
export default instance;