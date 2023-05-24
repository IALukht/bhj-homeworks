let pollTitle = document.getElementById("poll__title");
let pollAnswers = document.getElementById("poll__answers");

let request = new XMLHttpRequest();

request.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
request.responseType = "json";
request.send();

console.log(request);

request.onreadystatechange = function () {
    if(request.readyState === 4) {
        pollTitle.innerText = request.response.data.title;

        let answers = request.response.data.answers;

        for (let answer of answers) {
            pollAnswers.insertAdjacentHTML("afterBegin", `<button class="poll__answer">${answer}</button>`)
        }

        let buttons = document.getElementsByClassName("poll__answer");

        for (let btn of buttons) {
            btn.addEventListener('click', () => alert('Спасибо, ваш голос засчитан!'))
        }
    }
}