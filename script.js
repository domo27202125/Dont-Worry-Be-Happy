let searchButton = document.querySelector("#search");

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", () => {
  console.log("button pressed");
  sendApiRequest();
});

//An asynchronous function to fetch data from the API.
async function sendApiRequest() {
  let response = await fetch(
    `https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=religious,racist,sexist`
  );
  console.log(response);
  let data = await response.json();
  console.log(data);
  useApiData(data);
}

//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data) {
  document.querySelector("#content").innerHTML = data.type;
  document.querySelector("#category").innerHTML = data.category;
  document.querySelector("#setup").innerHTML = data.setup;
  document.querySelector("#delivery").innerHTML = data.delivery;
}
