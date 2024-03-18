const axios = require('axios');
let data = JSON.stringify({
  "name": "Aryan_Bhardwaj",
  "email": "aryan0289.be21@chitkara.edu.in",
  "rollNumber": 2110990289,
  "phone": 8053142537
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/createAccount?name=Aryan_Bhardwaj&email=aryan0289.be21@chitkara.edu.in&rollNumber=2110990289&phone=8053142537',
  headers: { 
    'Content-Type': 'application/json', 
    'Cookie': 'BrowserId=eWm4GeUGEe6Du533SeYhMg; CookieConsentPolicy=0:1; LSKey-c$CookieConsentPolicy=0:1'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
