let btn = document.querySelector("#btn");
btn.addEventListener("click",Speech);

function Speech() {
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    let recognition = new SpeechRecognition();
    //events

   // recognition.interimResults = true;

    let p = document.createElement("p");
    let words = document.querySelector(".words");
    words.appendChild(p);

    recognition.addEventListener("result", (e) => {
        let transcript = [...e.results]
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join(""); 
        p.textContent = transcript;
        if (e.results[0].isFinal) {
            p = document.createElement("p");
            words.appendChild(p);
        }
    });

    //restart recognition
    recognition.addEventListener("end", recognition.start);

    //need to start speech recognition
    recognition.start();
}

//-----------------------------------------------------------------------------------

