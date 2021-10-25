// Declaring all the variables which are required throughout code....

let song_img=document.querySelector(".song_img");
let song_name=document.querySelector(".song_name");
let song_artist=document.querySelector(".song_artist");

let prev_song=document.querySelector(".prev_song");
let play_pause=document.querySelector(".play_pause");
let next_song=document.querySelector(".next_song");

let duration_slider = document.querySelector(".duration_slider");
let volume_slider = document.querySelector(".volume_slider");
let current_time = document.querySelector(".current_time");
let total_duration = document.querySelector(".total_duration");

let track_index = 0;
let isPlaying = false;
let UpdateTimer;

let current_song=document.createElement('audio');

// Array of objects containing all the details of the song 
let track_list = [
    {
      name: "Night Owl",
      artist: "Broke For Free",
      image: "https://th.bing.com/th/id/OIP.2yjwTPtc8Jz4TQb-ZG7-tAHaEL?pid=ImgDet&w=852&h=480&rs=1",
      path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3"
    },
    {
      name: "Enthusiast",
      artist: "Tours",
      image: "https://wallpapertag.com/wallpaper/full/7/8/c/236716-amazing-black-and-green-background-1920x1080-windows.jpg",
      path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Tours/Enthusiast/Tours_-_01_-_Enthusiast.mp3"
    },
    {
      name: "Shipping Lanes",
      artist: "Chad Crouch",
      image: "https://cdn.wallpapersafari.com/61/94/7ZEyO5.jpg",
      path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Chad_Crouch/Arps/Chad_Crouch_-_Shipping_Lanes.mp3",
    },
  ];
  // Now the function for loading a song

  function loadSong(track_index){
    // clear previous timer
    clearInterval(UpdateTimer);
    resetValues();

    // loading a song
    current_song.src=track_list[track_index].path;
    current_song.load();
    
    // update details of the song
    song_img.style.backgroundImage="url("+ track_list[track_index].image + ")" ;
    song_name.textContent=track_list[track_index].name;
    song_artist.textContent=track_list[track_index].artist;

    // set an interval for duration slider(one showing song progress in slider)
    UpdateTimer=setInterval(seekUpdate,1000);

    // Move to next song when current finishes
    current_song.addEventListener("ended",nextSong);
   }
  //  resetting the value as soon as a song plays
   function resetValues(){
     current_time.textContent="0:00";
     total_duration.textContent="0:00";
     duration_slider.value=0;
   }

  //  now the buttons
  // firstly control the playing/pausing events depending upon the conditon
  function playpauseSong(){
    if(!isPlaying){
      playTrack();
    }
    else {
      pauseTrack();
    }
  }
  function playTrack(){
    current_song.play();
    isPlaying=true;
  play_pause.innerHTML='<i class="fas fa-pause"></i>';
  }
  function pauseTrack(){
    current_song.pause();
    isPlaying=false;
    play_pause.innerHTML='<i class="fas fa-play"></i>';
  }
  function prevSong(){
    if(track_index<track_list.length-1){
      track_index+=1;
    }
    else{
      track_index=0;
    }
    loadSong(track_index);
    playTrack();
  }
  function nextSong(){
    if(track_index>0){
      track_index-=1;
    }
    else{
      track_index=track_list.length-1;
    }
    loadSong(track_index);
    playTrack();
  }
  function getTo(){
    let getTo=current_song.duration * (duration_slider.value)/100;
    current_song.currentTime=getTo;
  }
  function setVolume(){
    current_song.volume=volume_slider.value/100;
  }
  function seekUpdate() {
    let seekPosition = 0;
  
    if (!isNaN(current_song.duration)) {
      seekPosition = current_song.currentTime * (100 / current_song.duration);
  
      duration_slider.value = seekPosition;
  
      let currentMinutes = Math.floor(current_song.currentTime / 60);
      let currentSeconds = Math.floor(current_song.currentTime - currentMinutes * 60);
      let durationMinutes = Math.floor(current_song.duration / 60);
      let durationSeconds = Math.floor(current_song.duration - durationMinutes * 60);
  
      if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
      if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
      if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
      if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
  
      current_time.textContent = currentMinutes + ":" + currentSeconds;
      total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
  }
  loadSong(track_index);