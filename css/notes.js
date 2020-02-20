New Section ==> New Films

// 6 Films
// each Film => pic, title, description




// malik's 
const section = document.querySelector('.new-films');

fetch('https://api.themoviedb.org/3/movie/popular?api_key=d8d436ca878e548c5f0a4b2514f1e60b')
  .then(response => response.json())
  .then(json => json.results.forEach((data, i) => {
      if(i<6){
    section.innerHTML = `<div class="card">
                        <img src="static/${data[i].imageURL}">
                        <h3 class="film-name"></h3>
                        <p class="description"></p>
                    </div>`;
  }))

//
//
//
//


const section = document.querySelector('.new-films');

fetch('https://api.themoviedb.org/3/movie/popular?api_key=d8d436ca878e548c5f0a4b2514f1e60b')
  .then(response => response.json())
  .then(json => json.results.forEach((data, i) => {
    section.innerHTML = `<div class="card" style="width:300px; height:800px">
                        <img src="http://image.tmdb.org/t/p/w342/${data[i].poster_path}">
                        <h3 class="film-name">${data[i].title}</h3>
                        <p class="description">${data[i].overview}</p>
                    </div>`;
  }))


const i=0;
  fetch('https://api.themoviedb.org/3/movie/popular?api_key=d8d436ca878e548c5f0a4b2514f1e60b')
  .then(response => response.json())
  .then(json => json.results.forEach((data,i) => {
   console.log(data[i].title);
  }))



//fetch title



fetch('https://api.themoviedb.org/3/movie/popular?api_key=d8d436ca878e548c5f0a4b2514f1e60b')
  .then(response => response.json())
  .then(json => console.log(json.results[0].title))




  //fetch description


  fetch('https://api.themoviedb.org/3/movie/popular?api_key=d8d436ca878e548c5f0a4b2514f1e60b')
  .then(response => response.json())
  .then(json => console.log(json.results[0].overview))


  /////fetch image


fetch('https://api.themoviedb.org/3/movie/popular?api_key=d8d436ca878e548c5f0a4b2514f1e60b')
  .then(response => response.json())
  .then(json => console.log(json.results[0].poster_path))


  http://image.tmdb.org/t/p/w342/

