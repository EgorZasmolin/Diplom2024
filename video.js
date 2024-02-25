let videoPlayer = document.getElementById("videoPlayer");
let myVideo1 = document.getElementById("myVideo1");
let localStorageKey = 'videoPlayed';

function stopVideo() { 
  videoPlayer.style.display = "none"; 
  myVideo1.pause(); // Остановка воспроизведения видео
  localStorage.setItem(localStorageKey, "paused");
} 

function playVideo(file) { 
  myVideo1.src = file;
  videoPlayer.style.display = "block"; 

  // Проверяем, проигрывалось ли видео до этого
  if(localStorage.getItem(localStorageKey) === "played") {
    myVideo1.play(); // Воспроизведение видео
  } else {
    localStorage.setItem(localStorageKey, "played");
  }
} 

window.onload = function() {
  // При загрузке страницы проверяем, нужно ли воспроизводить видео
  if(localStorage.getItem(localStorageKey) === "played") {
    playVideo(myVideo1.src); 
  }
}
