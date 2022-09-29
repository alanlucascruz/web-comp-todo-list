const cardBody = document.querySelector(".card-body");
const inputTask = document.querySelector("#input-task");
const addButton = document.querySelector("#add-button");

const templateTask = (task) => {
  const taskId = Date.now();

  const template = `
    <div class="task" task-id="${taskId}">
      <div class="description">
        <label class="checkbox">
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <span class="text">${task}</span>
      </div>

      <a 
        href="javascript:void(0)"
        onclick="onClickRemoveTask(${taskId})"
      >
        <i class="bi bi-trash"></i>
      </a>
    </div>
  `;

  return template;
};

const onClickAddTask = () => {
  const task = inputTask.value;
  const template = templateTask(task);

  cardBody.innerHTML += template;

  inputTask.value = "";
  inputTask.focus();
};

const onClickRemoveTask = (taskId) => {
  document.querySelector(`[task-id="${taskId}"]`).remove();
};
