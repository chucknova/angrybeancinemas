// All variables
let previewDataCart = JSON.parse(localStorage.getItem('moviepreviewData')) || [];
let movieTitleCard = document.getElementById("movietitlecard");
let movieYearGenre = document.getElementById("movieyeargenre");
let movieIdmb = document.getElementById("movieidmb");
let imageUrl = document.getElementById("image-url");
let imageDetailsUrl = document.getElementById("image-details-url")
let previewData = document.getElementById("preview-data");
let movietitledetail = document.getElementById("movietitledetail");
let movieactor = document.getElementById("movieactor");
let moviedirector = document.getElementById("moviedirector");
let moviegenre = document.getElementById("moviegenre");
let movierelease = document.getElementById("movierelease");
let movielanguage = document.getElementById("movielanguage");
let moviesynopsis = document.getElementById("moviesynopsis");
let movieshowdateone = document.getElementById("movieshowdateone");
let movieshowtimeoneOne = document.getElementById("movieshowtimeone-one");
let movieshowtimeoneTwo = document.getElementById("movieshowtimeone-two");
let movieshowdatetwo = document.getElementById("movieshowdatetwo");
let movieshowtimetwoOne = document.getElementById("movieshowtimetwo-one");
let movieshowtimetwoTwo = document.getElementById("movieshowtimetwo-two");
let movieprice = document.getElementById("movieprice");
let youtubetrailer = document.getElementById("youtubetrailer ");
let inputmoviedate = document.getElementById("inputmoviedate");
let inputmovietime = document.getElementById("inputmovietime");
let movieCart = [];
let bookingDisplay = document.getElementById("bookingdisplay")
// End of all variables

// Function to display the movie cards
function displayMovieCards() {
    previewData.innerHTML = "";
    for (let i = 0; i < previewDataCart.length; i++) {
        const element = previewDataCart[i];
        previewData.innerHTML += `
        <div class="adminone">
        <img class="movie-card-poster" src="${element.moviePoster}" alt="movieposter" srcset="">
        <h2 class="movie-card-title">${element.movieTitleCard}</h2>
        <h3 class="year-genre-time">${element.movieYearGenre}</h3>
        <div class="rating rate">
            <img src="./Images/Star 1.png" alt="" class="star2"><span class="rate-text">${element.movieIdmb}</span>
        </div>
        <button onclick="showMovieDetails(${i})" class="movie-details-btn">View Details</button><br>
        <button onclick="removeAdminOne(${i})" class="adminonedel">Remove Movie</button>
    </div>
    `;
    }
}
// Function to take you to book ticket
function booktickethere(index) {
    const check = previewDataCart[index];
    bookingDisplay.innerHTML =
        ` 
                    <div class="modal-body" id = "detailsinfo">
                    <div class="movienotflex">
                    <div class="movie-prod-poster">
                        <img src="${check.moviePoster}" alt="" class="movie-prod-poster-img">
                    </div>
                    <div class="movie-prod-details">
                        <h1 id="bukastreettitle" class="movie-prod-title">${check.movieTitleCard}</h1>
                        <div class="ratings">
                            <h4 class="year-genre-time">${check.movieYearGenre}</h4>
                            <div class="rating rate">
                                <img src="./Images/Star 1.png" alt="" class="star2"><span class="rate-text">${check.movieIdmb}</span>
                            </div>
                        </div>
                        <div class="movie-price">Ticket Price: <strong>NGN ${check.movieprice}</strong></div>
                    </div>
                </div>
                <!--End of Movie Poster and production details -->
            
                <!-- Select Date -->
                <div class="select-date-time-container">
                    <h2 class="select-date-header">Select Date and Time</h2>
                    <div class="select-date-time-btns select-date-one">
                        <button class="selectdatebtn">
                            <div class="month">${check.movieshowdateone}</div>
                        </button>
                        <button class="selecttimebtn">
                            <div class="time">${check.movieshowtimeoneOne}</div>
                        </button>
                        <button class="selecttimebtn">
                            <div class="time">${check.movieshowtimeoneTwo}</div>
                        </button>
                    </div>
                    <div class="select-date-time-btns select-date-two">
                        <button class="selectdatebtn">
                            <div class="month">${check.movieshowdatetwo}</div>
                        </button>
                        <button class="selecttimebtn">
                            <div class="time">${check.movieshowtimetwoOne}</div>
                        </button>
                        <button class="selecttimebtn">
                            <div class="time">${check.movieshowtimetwoTwo}</div>
                        </button>
                    </div>
                    <div class="input-date-time">
                        <input placeholder="Enter date you will watch this movie" type="text" name="" class="inputdate"
                            id="inputmoviedate"> <br><br>
                        <input placeholder="Enter time you will watch this movie" type="text" name="" class="inputtime"
                            id="inputmovietime">
                    </div>
                    <!-- Add to cart -->
                    <div class="submit-comment-container">
                        <button onclick="addMovieToCart()" class="addcartbtn">Add to cart</button>
                    </div>
                    <!-- End of Add to cart -->
                `
    console.log(check.movieIdmb);
}

// Load the movie cards from local storage on page load
window.onload = function () {
    displayMovieCards();
};

// Push movies to preview panel
function pushMovieCardDetails() {
    previewDataCart.push(
        {
            moviePoster: imageUrl.value,
            movieTitleCard: movieTitleCard.value,
            movieYearGenre: movieYearGenre.value,
            movieIdmb: movieIdmb.value,
            movieDetailsPoster: imageDetailsUrl.value,
            movietitledetail: movietitledetail.value,
            movieactor: movieactor.value,
            moviedirector: moviedirector.value,
            moviegenre: moviegenre.value,
            movierelease: movierelease.value,
            movielanguage: movielanguage.value,
            moviesynopsis: moviesynopsis.value,
            movieshowdateone: movieshowdateone.value,
            movieshowtimeoneOne: movieshowtimeoneOne.value,
            movieshowtimeoneTwo: movieshowtimeoneTwo.value,
            movieshowdatetwo: movieshowdatetwo.value,
            movieshowtimetwoOne: movieshowtimetwoOne.value,
            movieshowtimetwoTwo: movieshowtimetwoTwo.value,
            movieprice: movieprice.value,

        }
    );
    console.log(previewDataCart);
    localStorage.setItem('moviepreviewData', JSON.stringify(previewDataCart));
    displayMovieCards(); // Update the display with the new movie cards
}

// Remove movie from user page
function removeAdminOne(index) {
    previewDataCart.splice(index, 1);
    localStorage.setItem('moviepreviewData', JSON.stringify(previewDataCart));
    displayMovieCards();
    console.log(previewDataCart);
}

// Add movie to cart
function addMovieToCart(index) {
    movieCart.push(
        {
            inputMovieTime: inputmovietime.value,
            inputMovieDate: inputmoviedate.value
        }
    )
    console.log(movieCart);
  }
  

// Show movie Details
function showMovieDetails(index) {
    for (let i = 0; i < previewDataCart.length; i++) {
        if (i === index) {
            const movie = previewDataCart[i];
            bookingDisplay.innerHTML = `
          <div class="admintwo">
          <div class="movie-prod-div-one">
          <div class="movie-prod-poster">
              <img src="${movie.moviePoster}" alt="" class="movie-prod-poster-imgg">
              <div class="playbtndiv">
                  <a href="${movie.youtubetrailer}"><button class="playbutton"><img
                              src="./Images/PlayVideo.png" alt="" class="playbuttonicon"></button></a>
              </div>
          </div>
          <div class="movie-prod-detailss">
              <h1 class="movie-prod-title">${movie.movietitledetail}</h1>
              <h3 class="actors"><strong>Actors: </strong>${movie.movieactor}</h3>
              <h3 class="director"><strong>Directors: </strong>${movie.moviedirector}</h3>
              <h3 class="genre"><strong>Genre: </strong>${movie.moviegenre}</h3>
              <h3 class="release"><strong>Release: </strong>${movie.movierelease}</h3>
              <h3 class="language"><strong>Language: </strong>${movie.movielanguage}</h3>
          </div>
      </div>
      <div class="movie-prod-div-two">
          <h1 class="synopsis-title">Film Synopsis </h1>
          <p class="synopsis-text">
          ${movie.moviesynopsis}
          </p>
      </div>
    
      <div class="all-showtimes">
          <h1 class="all-showtimes-header">All The Showtimes</h1>
          <div class="showtime-btnsflexwrap">
              <div class="showtime-info">
                  <div class="showtime-btn-uppertext">${movie.movieshowdateone}</div>
                  <div class="showtime-btn-div">
                      <button class="showtime-btn">${movie.movieshowtimeoneOne}</button>
                      <button class="showtime-btn">${movie.movieshowtimeoneTwo}</button>
                  </div>
              </div>
              <div class="showtime-info">
                  <div class="showtime-btn-uppertext">${movie.movieshowdatetwo}</div>
                  <div class="showtime-btn-div">
                      <button class="showtime-btn">${movie.movieshowtimetwoOne}</button>
                      <button class="showtime-btn">${movie.movieshowtimetwoTwo}</button>
                  </div>
              </div>
          </div>
      </div>
    
      <!-- Book Ticket -->
      <div class="book-ticket-div">
          <button onclick = "booktickethere(${i})" class="book-ticket-btn">Book
              Ticket</button>
      </div>
          </div>
        `;
            console.log(movie.movieYearGenre);
            break;
        }
    }
}
