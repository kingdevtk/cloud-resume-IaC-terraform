var visits = document.getElementById("visits");
fetch("https://g21z1pb3pa.execute-api.us-east-1.amazonaws.com/prod/", {
    method: "GET",
    // mode: "cors",
    headers: {
      "Content-Type": "application/json",
      //"Access-Control-Allow-Origin" : "*",
    },
  })
  .then(response => response.json())

fetch("https://g21z1pb3pa.execute-api.us-east-1.amazonaws.com/prod/", {
    method: "POST",
    // mode: "cors",
    headers: {
      "Content-Type": "application/json",
      //"Access-Control-Allow-Origin" : "*",
    },
  })
  .then(response => response.json())
  .then(data => {
    visits.innerHTML = data;
  })
  .catch((error) => {
    console.log(error);
  })