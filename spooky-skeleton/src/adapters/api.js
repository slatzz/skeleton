import axios from "axios";

const options = {
  method: "POST",
  url: "https://sameer-kumar-aztro-v1.p.rapidapi.com/",
  params: { sign: "aquarius", day: "today" },
  headers: { "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com" },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
