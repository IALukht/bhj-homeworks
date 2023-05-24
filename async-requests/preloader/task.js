const loader = document.querySelector("#loader");
const items = document.querySelector("#items");

let request = new XMLHttpRequest();

request.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
request.setRequestHeader("Content-Type", "application/json");
request.responseType ="json";
request.send();

request.addEventListener("readystatechange", () => {
    if (request.readyState === 4) {
        Object.values(request.response.response.Valute).forEach(element => {
            items.insertAdjacentHTML("beforeend", 
            `<div class="item__code">
                ${element.CharCode}
            </div>
            <div class="item__value">
                ${element.Value}
            </div>
             <div class="item__currency">
                руб.
            </div>
            `)
        });
        loader.classList.remove("loader_active");
    }
});