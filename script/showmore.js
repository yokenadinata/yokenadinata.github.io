const urlTrending = "https://api.themoviedb.org/3/trending/movie/day?api_key=e23b998a90f0465b42f5c38348e11f65";
    fetch(urlTrending)
    .then(r => r.json())
    .then(function(d){
        for(var i = 0; i < 12; i++){

                document.getElementById("trendingmovie").innerHTML += "<div class='col-md-4 mt-3 text-center'><div class='card'><div class='card-header'><h5>" + d.results[i].title + "</h5></div><div class='card-body><div class='row'><div class='col-md-12 text-center'><img class='img-fluid img-thumbnail my-3'  src=https://image.tmdb.org/t/p/w500"+ d.results[i].poster_path + " data-toggle='modal' data-target='#Modal"+ i +"'></div></div></div></div></div><div class='modal' id='Modal" + i +"' tabindex='-1' role='dialog'><div class='modal-dialog modal-dialog-centered' role='document'><div class=modal-content><div class='modal-header'><h5 class='modal-title'>"+ d.results[i].title+"</h5><button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div><div class='modal-body'>"+ d.results[i].overview+"</div><div class='modal-footer'>Release Date: "+d.results[i].release_date+"</div></div></div></div>";
            
            // document.getElementById("trending").innerHTML += "<div class='flex-container'><img src=https://image.tmdb.org/t/p/w500" + d.results[i].poster_path + "></div>";
        }
    })
