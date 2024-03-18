const axios = require('axios');
let data = JSON.stringify({
  "company": "Bajaj Finserv",
  "currentPrice": 1579.4,
  "accountNumber": "BFHL0018646",
  "githubRepoLink": " https://github.com/akaryan611/bajaj-int"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/buyStocks',
  headers: { 
    'bfhl-auth': '2110990289', 
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
