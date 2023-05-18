const chatWidget = document.querySelector('.chat-widget'),
      messages = document.querySelector( '.chat-widget__messages' ),
      chatInput = document.getElementById('chat-widget__input');

let date = new Date();

chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
});

document.addEventListener('keydown', event => {
    if (event.key === 'Enter' && chatInput.value.trim()) {
        messages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
            <div class="message__text">
        ${chatInput.value}
        </div>        
        `
        chatInput.value = "";

        messages.innerHTML += `
        <div class="message">
            <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
            <div class="message__text">${botAnswer()}</div>
        </div>
        `
        messages.lastElementChild.scrollIntoView();
    }
});

function botAnswer() {
    let botSays = [
          "Добрый день! До свидания!",
          "Таким, как вы, не отвечаем",
          "Устал от вас...",
          "Ничего мы вам не продадим",
          "Не нравитесь вы мне",
          "Где ваша совесть?",
          "Я ушел пить чай",
          "Хотелось бы вам ответить... А нет, не хотелось!",
          "К сожалению  все операторы сейчас заняты! Не пишите нам больше!"
        ],
        random = Math.floor(Math.random() * botSays.length);
  
    return botSays[random];
}