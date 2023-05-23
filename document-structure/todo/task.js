const button = document.getElementById("tasks__add");
const tasksList = document.getElementById("tasks__list");
const input = document.getElementById("task__input");

button.addEventListener("click", function(event) {
    event.preventDefault();
    let tasksDiv = document.createElement("div"); 
    if (input.value.trim()) {
         tasksDiv.classList.add("task");
         tasksDiv.insertAdjacentHTML('beforeend', `
            <div class="task__title">
                ${input.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
            `);

         document.getElementById("tasks__list").appendChild(tasksDiv);
         let tasksRemove = tasksDiv.querySelector(".task__remove");
         tasksRemove.addEventListener("click", (e) => 
              e.target.parentElement.remove()
         );

         input.value = "";   
    }
});