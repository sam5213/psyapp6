document.addEventListener("DOMContentLoaded", () => {
    // Получаем элементы DOM
    const taskList = document.getElementById("task-list");
    const addTaskForm = document.getElementById("add-task-form");
    const taskInput = document.getElementById("task-input");

    // Функция для добавления новой задачи
    function addTask(task) {
        const newTaskItem = document.createElement("li");
        newTaskItem.innerText = task;

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Удалить";
        deleteButton.addEventListener("click", () => {
            newTaskItem.remove();
        });

        newTaskItem.appendChild(deleteButton);
        taskList.appendChild(newTaskItem);
    }

    // Обработчик формы для добавления новых задач
    addTaskForm.addEventListener("submit", event => {
        event.preventDefault(); // Отменяем стандартное поведение отправки формы

        const task = taskInput.value.trim();
        if (task !== "") {
            addTask(task);
            taskInput.value = "";
        }
    });
});
