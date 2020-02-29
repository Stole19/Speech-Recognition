window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

const transcript_element = document.getElementById('transcript');

const talkButton = document.getElementById('start');
const endButton = document.getElementById('end');


let p = document.createElement('p');

transcript_element.appendChild(p);

recognition.addEventListener('result', (e) => {

    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');



    p.textContent = transcript;

    if (e.results[0].isFinal) {


        p = document.createElement('p');

        p.textContent = transcript;

        transcript_element.appendChild(p);

        p.textContent = "";

        if (transcript.includes('weather')) {

            let command = document.createElement('p');
            command.classList.add('command');
            command.textContent = 'Getting weather...';

            transcript_element.appendChild(command);
        }

    }
});

recognition.addEventListener('end', () => {

    endButton.disabled = true;
    talkButton.disabled = false;
});


talkButton.addEventListener('click', () => {

    endButton.disabled = false;
    talkButton.disabled = true;
    recognition.start()

});
endButton.addEventListener('click', () => {

    endButton.disabled = true;
    talkButton.disabled = false;
    recognition.stop()
});




// If You Want The Program To Start With a Name  --- Sarah---


// window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// const recognition = new SpeechRecognition();
// recognition.interimResults = true;
// const transcript_element = document.getElementById("transcript");
// const talk_button = document.getElementById("start");
// const end_button = document.getElementById("end");

// let p = document.createElement("p");
// transcript_element.appendChild(p);

// recognition.addEventListener("result", (e) => {
//     const transcript = Array.from(e.results)
//         .map(result => result[0])
//         .map(result => result.transcript)
//         .join("");

//     if (transcript.startsWith("Sarah")) {
//         p.textContent = transcript;
//         if (e.results[0].isFinal) {
//             p = document.createElement("p");
//             p.textContent = transcript;
//             transcript_element.appendChild(p);
//             p.textContent = "";

//             if (transcript.includes("weather")) {
//                 console.log("Weather");

//                 let command = document.createElement("p");
//                 command.classList.add("command");
//                 command.textContent = "Getting Weather...";

//                 transcript_element.appendChild(command);
//             }
//         }
//     }
// });

// recognition.addEventListener("end", recognition.start);

// recognition.start();
