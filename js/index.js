const navButton = document.querySelector(".bars");
// films section
const section = document.querySelector(".new-films");
const fixed_nav = document.querySelector("header");

navButton.addEventListener("click", () => {
  nav.classList.toggle("mobile-hidden");
});

// fetching movies data from themoviedb API
fetch(
  "https://api.themoviedb.org/3/movie/popular?api_key=d8d436ca878e548c5f0a4b2514f1e60b"
)
  .then(response => response.json())
  .then(json =>
    json.results.forEach((data, i) => {
      if (i < 6) {
        section.innerHTML += `	<div class="card">
                        		    <img src="http://image.tmdb.org/t/p/w342/${data.poster_path}">
                        	    	<h3 class="film-name">${data.title}</h3>
                        	    	<p class="description">${data.overview}</p>
                    		      	</div>`;
      }
    })
  );

//make navbar fixed onscroll
document.addEventListener("scroll", () => {
  if (window.pageYOffset > 200) {
    fixed_nav.classList.add("fixed");
    document.body.style.marginTop = "85px";
  } else {
    fixed_nav.classList.remove("fixed");
    document.body.style.marginTop = "0";
  }
});
