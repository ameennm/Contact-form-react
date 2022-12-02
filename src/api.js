import axios from "axios"

const options = {
  method: 'GET',
  url: 'https://mashvisor-api.p.rapidapi.com/property',
  params: {state: 'kerala', zip_code: '682315', id: '2430136'},
  headers: {
    'X-RapidAPI-Key': '1eoyC1xokpe6zgAXHoFsLLR6Su5a2Mt5d1jsnce947ce28ad8',
    'X-RapidAPI-Host': 'mashvisor-api.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});