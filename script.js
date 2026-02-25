import { videos } from "./data.js";
// console.log(videos);

const micBtn = document.getElementById("mic");
const searchInput = document.getElementById("searchInput");

const SpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition;

console.log("SpeechRecognition:", SpeechRecognition);

if (!SpeechRecognition) {
  alert("Speech Recognition not supported in this browser.");
} 
else {
  const recognition = new SpeechRecognition();

  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.continuous = false;

  micBtn.addEventListener("click", () => {
    console.log("Mic clicked");
    recognition.start();
  });

  recognition.onstart = () => {
    console.log("Listening started...");
    micBtn.style.backgroundColor = "red";
  };

  recognition.onresult = (event) => {
    console.log("Result received:", event);
    const transcript = event.results[0][0].transcript;
    searchInput.value = transcript;
  };

  recognition.onerror = (event) => {
    console.log("Error:", event.error);
  };

  recognition.onend = () => {
    console.log("Listening stopped");
    micBtn.style.backgroundColor = "";
  };
}


videos.map((e)=>{
  console.log(e);
  
})