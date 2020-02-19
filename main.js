//loads in the songs and its assets and others
var songs = ["Fall Out Boy - Dance Dance.mp3", "jimbo.mp3", "Green Day - Basket Case.mp3", "Sunflower.mp3", "Metallica - One.mp3", "Buttercup.mp3", "My Chemical Romance - Helena.mp3", "ItDoesn'tMatterWhy.mp3", "Twenty One Pilots - Chlorine.mp3", "Old Town Road.mp3", "NeverGonnaGiveYouUp.mp3"];
var poster = ["FromUnderTheCorkTree.jpg", "VeryCoolMusicForVeryCoolPeople.jpg", "Dookie.jpg", "SpiderVerse.jpg", "AndJusticeForAll.jpg", "PopFood.jpg", "MCRThreeCheers.jpg", "WidowsWeed.jpg", "TOPTrench.png", "OldTownRoad_.jpg", "WheneverYouNeedSomebody.jpg"];
var title = ["Fall Out Boy - Dance, Dance", "Fredo Disco - Jimbo", "Green Day - Basket Case", "Post Malone - Sunflower(ft. Swae Lee)", "Metallica - One", "Jack Stauber - Buttercup", "My Chemical Romance - Helena(So Long and Goodnight)", "Silverstone Pickups - It Doesn't Matter Why", "Twenty One Pilots - Chlorine", "Lil Nas X - Old Town Road(ft. Billy Ray Cyrus)", "Rick Astley - Never Gonna Give You Up"];

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
//if the decrease volume button is clicked it does this
function decreaseVolume(){
    song.volume -= 0.20; //decreases volume
}
//if the increase volume button is clicked it does this
function increaseVolume(){
    song.volume += 0.20; //increases volume
}
//when the style selector selects something new it does this
function getStyle(){
    //loads in whatever the value is that it is receiving
    var selectedVue = document.getElementById("list").value;

    //loads in every button and other things in the player
    var main = document.getElementById("main");
    var pre = document.getElementById("pre");
    var play = document.getElementById("play");
    var next = document.getElementById("next");
    var title = document.getElementById("songTitle");
    var fill = document.getElementById("fill");
    var handle = document.getElementById("handle");
    var currentTime = document.getElementById("currentTime");
    var decrease = document.getElementById("decrease");
    var volumeIcon = document.getElementById("volumeIcon");
    var increase = document.getElementById("increase");
    var selector = document.getElementById("list");

    //depending on the selected item, it will change the css of the items
    if(selectedVue === "blackT"){
        selector.style.backgroundColor = "rgba(0, 0, 0, 0.72)";
        selector.style.color = "E8E8E8";
        main.style.backgroundColor = "#000";
        title.style.color = "#E8E8E8";
        currentTime.style.color = "E8E8E8";
        pre.style.backgroundColor = "3B3B3B";
        play.style.backgroundColor = "3B3B3B";
        next.style.backgroundColor = "3B3B3B";
        decrease.style.backgroundColor = "3B3B3B";
        volumeIcon.style.backgroundColor = "3B3B3B";
        increase.style.backgroundColor = "3B3B3B";
        fill.style.backgroundColor = "E8E8E8";
        handle.style.backgroundColor = "3B3B3B";
    }else if(selectedVue === "whiteT"){
        selector.style.backgroundColor = "rgba(216, 216, 216, 0.72)";
        selector.style.color = "#101010";
        title.style.color = "#101010";
        main.style.backgroundColor = "#D8D8D8";
        currentTime.style.color = "202020";
        pre.style.backgroundColor = "101010";
        play.style.backgroundColor = "101010";
        next.style.backgroundColor = "101010";
        decrease.style.backgroundColor = "101010";
        volumeIcon.style.backgroundColor = "101010";
        increase.style.backgroundColor = "101010";
        fill.style.backgroundColor = "202020";
        handle.style.BackgroundColor = "101010";
    }else if(selectedVue === "redT"){
        selector.style.backgroundColor = "rgba(144, 0, 0, 0.72)";
        selector.style.color = "080000";
        title.style.color = "#080000";
        main.style.backgroundColor = "#900000";
        currentTime.style.color = "#080000";
        pre.style.backgroundColor = "#280000";
        play.style.backgroundColor = "#280000";
        next.style.backgroundColor = "#280000";
        decrease.style.backgroundColor = "280000";
        volumeIcon.style.backgroundColor = "280000";
        increase.style.backgroundColor = "280000";
        fill.style.backgroundColor = "202020";
        handle.style.BackgroundColor = "280000";
    }else if(selectedVue === "blueT"){
        selector.style.backgroundColor = "rgba(51, 102, 255, 0.72)";
        selector.style.color = "000080";
        title.style.color = "#000080";
        main.style.backgroundColor = "3366FF";
        currentTime.style.color = "#000080";
        pre.style.backgroundColor = "#000080";
        play.style.backgroundColor = "#000080";
        next.style.backgroundColor = "#000080";
        decrease.style.backgroundColor = "#000080";
        volumeIcon.style.backgroundColor = "#000080";
        increase.style.backgroundColor = "#000080";
        fill.style.backgroundColor = "#000080";
        handle.style.BackgroundColor = "E8E8E8";
    }else{
        //if theres an error it will say there was an error
        console.log("errror");
    }
}
