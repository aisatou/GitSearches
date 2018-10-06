// grab each element needed
const inputValue = document.getElementById('search');
const searchButton = document.querySelector('.searchButton');
const nameContainer = document.querySelector('.main__profile-name');
const usernameContainer = document.querySelector('.main__profile-username');
const reposContainer = document.querySelector('.main__profile-repos');
// const urlContainer = document.querySelector('.main__profile-url');
const followers = document.querySelector('.main__profile-followers');

const client_id = "Iv1.466b676d3f44b098";
const client_secret = "6e06d005107b87daaa26fb73da604ba4ed15a1af";

// responsible for making the API call
// async, await for HTTP request
const fetchUsers = async (user) => {
  // fetch API helps with HTTP calls
  // instantiate function, then add in URL
  const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`);

// convert whatever comes back from call into JSON (javascript object notation) format
  const data = await api_call.json();
  // return object with key and set value to what is given back
  return { data }
  // same as saying 'return { data: data }''
};

const showData = () => {
  // callback
  // instantiate promise with .then
  fetchUsers(inputValue.value).then((r) => {
    // console.log(r);

    nameContainer.innerHTML = `Name: <span class="main__profile-value">${r.data.name}</span>`
    usernameContainer.innerHTML = `Username: <span class="main__profile-value">${r.data.login}</span>`
    followers.innerHTML = `Followers: <span class="main__profile-value">${r.data.followers}</span>`
    reposContainer.innerHTML = `Repos: <span class="main__profile-value">${r.data.public_repos}</span>`
    // urlContainer.innerHTML = `URL: <span class="main__profile-value">${r.data.html_url}</span>`
  })
};

// listen to click property
searchButton.addEventListener("click", () => {
  console.log("Yer!")
  showData();
})
