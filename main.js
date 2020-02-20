//loads in the songs and its assets and others
var songs = ["Fall Out Boy - Dance Dance.mp3", "jimbo.mp3", "Green Day - Basket Case.mp3", "Sunflower.mp3", "Metallica - One.mp3", "Buttercup.mp3", "My Chemical Romance - Helena.mp3", "ItDoesn'tMatterWhy.mp3", "Twenty One Pilots - Chlorine.mp3", "Old Town Road.mp3", "NeverGonnaGiveYouUp.mp3"];
var poster = ["FromUnderTheCorkTree.jpg", "VeryCoolMusicForVeryCoolPeople.jpg", "Dookie.jpg", "SpiderVerse.jpg", "AndJusticeForAll.jpg", "PopFood.jpg", "MCRThreeCheers.jpg", "WidowsWeed.jpg", "TOPTrench.png", "OldTownRoad_.jpg", "WheneverYouNeedSomebody.jpg"];
var title = ["Dance, Dance", "Jimbo", "Basket Case", "Sunflower(ft. Swae Lee)", "One", "Buttercup", "Helena(So Long and Goodnight)", "It Doesn't Matter Why", "Chlorine", "Old Town Road(ft. Billy Ray Cyrus)", "Never Gonna Give You Up"];
var album = ["From Under The Cork Tree", "Very Cool Music For Very Cool People", "Dookie", "Spider Man: Into The Spider Verse", "Pop Food", "Three Cheers For Sweet Revenge", "Widows Weed", "Trench", "Old Town Road", "Whenever You Need Somebody"];
var artist = ["Fall Out Boy", "Fredo Disco", "Green Day", "Post Malone", "Metallica", "Jack Stauber", "My Chemical Romance", "Silverstone Pickups", "Twenty One Pilots", "Lil Nas X", "Rick Astley"]

var songTitle = document.getElementById("songTitle");
var fillBar = document.getElementById("fill");


var cirrentTime = document.getElementById("currentTime");

var song = new Audio();
var currentSong = 0;    // it point to the current song and title


window.onload = playSong;   // it will call the function playSong when window is load

function playSong(){

    song.src = songs[currentSong];  //set the source of 0th song

    songTitle.textContent = title[currentSong]; // set the title of song

    song.play();    // play the song
}

function playOrPauseSong(){

    if(song.paused){
        song.play();
        $("#play img").attr("src","Pause.png");
    }
    else{
        song.pause();
        $("#play img").attr("src","Play.png");
    }
}
//when the song keepos going calculates the time and desplays that
song.addEventListener('timeupdate',function(){

    var position = song.currentTime / song.duration;

    fillBar.style.width = position * 100 +'%';

    convertTime(Math.round(song.currentTime));

    if(song.ended){
        next();
    }
});

function convertTime(seconds){
    var min = Math.floor(seconds / 60);
    var sec = seconds % 60;

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    currentTime.textContent = min + ":" + sec;

    totalTime(Math.round(song.duration));
}

function totalTime(seconds){
    var min = Math.floor(seconds / 60);
    var sec = seconds % 60;

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    currentTime.textContent += "/" + min + ":" + sec;
}
//if the nexct button is clicked it doesd this
function next(){

    currentSong++;
    if(currentSong > 10){
        currentSong = 0;
    }
    playSong();
    $("#play img").attr("src","Pause.png");
    $("#image img").attr("src",poster[currentSong]);
    $("#bg img").attr("src",poster[currentSong]);
}
//if the pre button is clicked it does this
function pre(){

    currentSong--;
    if(currentSong < 0){
        currentSong = 10;
    }
    playSong();
    $("#play img").attr("src","Pause.png");
    $("#image img").attr("src",poster[currentSong]);
    $("#bg img").attr("src",poster[currentSong]);
}
