const axios = require('axios');
const express = require('express');

const app = express();

// app.get('/sso_login', (req, res) => {

// });

// const axios = require('axios').default;

let url = 'https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize'
let query = '?client_id=d93cd854-b338-4bf2-b08d-219a87ad2556&response_type=code&redirect_uri=http://localhost:6009/redirect&response_mode=query&scope=user.read'
    // Make a request for a user with a given ID
axios.get(url + query)
    .then(function(response) {
        // handle success
        console.log(response);
    })
    .catch(function(error) {
        // handle error
        console.log(error);
    })
    .finally(function() {
        // always executed
    });

app.listen(6009);