navigator.serviceWorker.register('/sw.js');

var deferredPrompt;
window.addEventListener('beforeinstallprompt', function(event) {
  console.log('beforeinstallprompt fired');
  event.preventDefault();
  deferredPrompt = event;
  return false;
});


var showStatus = 0;

function fetchMovie(){
    document.getElementById("searchmovie").innerHTML = "";
    var searchMovie = document.getElementById("search").value;
    const url = "https://api.themoviedb.org/3/search/movie?api_key=493d9cfb65c2913ce1a8d2cd87adc336&query=" + searchMovie;
    document.getElementById("searchmovie").innerHTML += "<div class='col-md-12'><h5>Showing results for " + searchMovie + "<h5></div>";
    // console.log(url);
    fetch(url)
    .then(r => r.json())
    .then(function(d){
        for(var i = 0; i < 8; i++){
            document.getElementById("searchmovie").innerHTML += "<div class='col-md-4 mt-3 text-center'><div class='card'><div class='card-header'><h5>" + d.results[i].title + "</h5></div><div class='card-body><div class='row'><div class='col-md-12 text-center'><img class='img-fluid img-thumbnail my-3'  src=https://image.tmdb.org/t/p/w500"+ d.results[i].poster_path + " data-toggle='modal' data-target='#Modal"+ i +"'></div></div></div></div></div><div class='modal' id='Modal" + i +"' tabindex='-1' role='dialog'><div class='modal-dialog modal-dialog-centered' role='document'><div class=modal-content><div class='modal-header'><h5 class='modal-title'>"+ d.results[i].title+"</h5><button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div><div class='modal-body'>"+ d.results[i].overview+"</div><div class='modal-footer'>Release Date: "+d.results[i].release_date+"</div></div></div></div>";
        }
    })
}
const urlTrending = "https://api.themoviedb.org/3/trending/movie/day?api_key=e23b998a90f0465b42f5c38348e11f65";
fetch(urlTrending)
.then(r => r.json())
.then(function(d){
    for(var i = 0; i < 6; i++){

             document.getElementById("trendingmovie").innerHTML += "<div class='col-md-4 mt-3 text-center'><div class='card'><div class='card-header'><h5>" + d.results[i].title + "</h5></div><div class='card-body><div class='row'><div class='col-md-12 text-center'><img class='img-fluid img-thumbnail my-3'  src=https://image.tmdb.org/t/p/w500"+ d.results[i].poster_path + " data-toggle='modal' data-target='#Modal"+ i +"'></div></div></div></div></div><div class='modal' id='Modal" + i +"' tabindex='-1' role='dialog'><div class='modal-dialog modal-dialog-centered' role='document'><div class=modal-content><div class='modal-header'><h5 class='modal-title'>"+ d.results[i].title+"</h5><button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div><div class='modal-body'>"+ d.results[i].overview+"</div><div class='modal-footer'>Release Date: "+d.results[i].release_date+"</div></div></div></div>";
        
        // document.getElementById("trending").innerHTML += "<div class='flex-container'><img src=https://image.tmdb.org/t/p/w500" + d.results[i].poster_path + "></div>";
    }
})

function showMore(){
    const urlTrending = "https://api.themoviedb.org/3/trending/movie/day?api_key=e23b998a90f0465b42f5c38348e11f65";
    //Show More
    if(showStatus == 0){
        document.getElementById("trendingmovie").innerHTML = "";
        showStatus = 1;
        fetch(urlTrending)
        .then(r => r.json())
        .then(function(d){
            for(var i = 0; i < 12; i++){
    
                    document.getElementById("trendingmovie").innerHTML += "<div class='col-md-4 mt-3 text-center'><div class='card'><div class='card-header'><h5>" + d.results[i].title + "</h5></div><div class='card-body><div class='row'><div class='col-md-12 text-center'><img class='img-fluid img-thumbnail my-3'  src=https://image.tmdb.org/t/p/w500"+ d.results[i].poster_path + " data-toggle='modal' data-target='#Modal"+ i +"'></div></div></div></div></div><div class='modal' id='Modal" + i +"' tabindex='-1' role='dialog'><div class='modal-dialog modal-dialog-centered' role='document'><div class=modal-content><div class='modal-header'><h5 class='modal-title'>"+ d.results[i].title+"</h5><button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div><div class='modal-body'>"+ d.results[i].overview+"</div><div class='modal-footer'>Release Date: "+d.results[i].release_date+"</div></div></div></div>";
                
                // document.getElementById("trending").innerHTML += "<div class='flex-container'><img src=https://image.tmdb.org/t/p/w500" + d.results[i].poster_path + "></div>";
            }
        })
        document.getElementById("idShow").innerHTML = "";
        document.getElementById("idShow").innerHTML += "<a class='btn btn-outline-warning' onclick='showMore()'>Show Less</a>";
    }
    //Show Less
    else if(showStatus == 1){
        document.getElementById("trendingmovie").innerHTML = "";
        showStatus = 0;
        fetch(urlTrending)
        .then(r => r.json())
        .then(function(d){
            for(var i = 0; i < 6; i++){
    
                    document.getElementById("trendingmovie").innerHTML += "<div class='col-md-4 mt-3 text-center'><div class='card'><div class='card-header'><h5>" + d.results[i].title + "</h5></div><div class='card-body><div class='row'><div class='col-md-12 text-center'><img class='img-fluid img-thumbnail my-3'  src=https://image.tmdb.org/t/p/w500"+ d.results[i].poster_path + " data-toggle='modal' data-target='#Modal"+ i +"'></div></div></div></div></div><div class='modal' id='Modal" + i +"' tabindex='-1' role='dialog'><div class='modal-dialog modal-dialog-centered' role='document'><div class=modal-content><div class='modal-header'><h5 class='modal-title'>"+ d.results[i].title+"</h5><button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div><div class='modal-body'>"+ d.results[i].overview+"</div><div class='modal-footer'>Release Date: "+d.results[i].release_date+"</div></div></div></div>";
                
                // document.getElementById("trending").innerHTML += "<div class='flex-container'><img src=https://image.tmdb.org/t/p/w500" + d.results[i].poster_path + "></div>";
            }
        })
        document.getElementById("idShow").innerHTML = "";
        document.getElementById("idShow").innerHTML += "<a class='btn btn-outline-success' onclick='showMore()'>Show More</a>";
    }
}
