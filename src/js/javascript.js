import '../css/reset.css';
import '../css/style.css';
// import '../css/fontello.css';

/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
// ---------- ADD FORM ----------
const btnAddTask = document.querySelector('#add-task');
btnAddTask.addEventListener('click', () => {
  document.querySelectorAll('#hide-form').forEach(elem => {
    elem.style.display = elem.style.display === 'flex' ? 'none' : 'flex';
  });
});
// ---------------------------------------------

// ---------- SHOW SIDEBAR LEFT ----------
const btnShowSidebarLeft = document.querySelector('.burger-main-menu');
const btnCloseSidebarLeft = document.querySelector('.icon-cancel');
const showSidebarLeft = document.getElementsByTagName('div')[1];

btnShowSidebarLeft.addEventListener('click', () => {
  // console.log(showSidebarLeft);
  if (showSidebarLeft.classList.contains('sidebar-left-hidden')) {
    showSidebarLeft.classList.remove('sidebar-left-hidden');
  } else {
    showSidebarLeft.classList.add('sidebar-left-hidden');
  }
});

btnCloseSidebarLeft.addEventListener('click', () => {
  // console.log(showSidebarLeft);
  if (showSidebarLeft.classList.contains('sidebar-left-hidden')) {
    showSidebarLeft.classList.remove('sidebar-left-hidden');
  } else {
    showSidebarLeft.classList.add('sidebar-left-hidden');
  }
});
// ---------------------------------------------

const arrTasks = [
  {
    name: 'Lorem, ipsum 1.',
    date: '2019-05-05',
    time: '14:20',
    notes:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ex enim veniam iure quidem neque aperiam, esse eius, temporibus nemo sit, nihil quae libero accusamus excepturi eos. Cumque, culpa tempora odio fugiat voluptatem, veniam perferendis quisquam eum quia incidunt adipisci nisi nesciunt dignissimos officia maiores voluptates amet alias animi earum.',
    priority: '↑ Hight Priority',
    completed: false,
  },
  {
    name: 'Lorem, ipsum 2.',
    date: '2018-08-02',
    time: '18:30',
    notes: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    priority: 'Medium Priority',
    completed: false,
  },
  {
    name: 'Lorem, ipsum 3.',
    date: '2019-11-21',
    time: '11:30',
    notes:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ex enim veniam iure quidem neque aperiam, esse eius, temporibus nemo sit, nihil quae libero accusamus excepturi eos. Cumque, culpa tempora odio fugiat voluptatem, veniam perferendis quisquam eum quia incidunt adipisci nisi nesciunt dignissimos officia maiores voluptates amet alias animi earum.',
    priority: '↓ Low Priority',
    completed: false,
  },
  {
    name: 'Lorem, ipsum 4.',
    date: '2017-09-15',
    time: '10:12',
    notes:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ex enim veniam iure quidem neque aperiam, esse eius, temporibus nemo sit, nihil quae libero accusamus excepturi eos. Cumque, culpa tempora odio fugiat voluptatem, veniam perferendis quisquam eum quia incidunt adipisci nisi nesciunt dignissimos officia maiores voluptates amet alias animi earum.',
    priority: 'Medium Priority',
    completed: false,
  },
];

const arrTasksCompleted = [
  {
    name: 'СLorem, ipsum 1.',
    date: '2019-05-05',
    time: '14:20',
    notes:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ex enim veniam iure quidem neque aperiam, esse eius, temporibus nemo sit, nihil quae libero accusamus excepturi eos. Cumque, culpa tempora odio fugiat voluptatem, veniam perferendis quisquam eum quia incidunt adipisci nisi nesciunt dignissimos officia maiores voluptates amet alias animi earum.',
    priority: '↑ Hight Priority',
    completed: true,
  },
  {
    name: 'СLorem, ipsum 2.',
    date: '2018-08-02',
    time: '18:30',
    notes: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    priority: 'Medium Priority',
    completed: true,
  },
  {
    name: 'СLorem, ipsum 3.',
    date: '2019-11-21',
    time: '11:30',
    notes:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ex enim veniam iure quidem neque aperiam, esse eius, temporibus nemo sit, nihil quae libero accusamus excepturi eos. Cumque, culpa tempora odio fugiat voluptatem, veniam perferendis quisquam eum quia incidunt adipisci nisi nesciunt dignissimos officia maiores voluptates amet alias animi earum.',
    priority: '↓ Low Priority',
    completed: true,
  },
];

(function() {
  const uName = document.querySelector('#inputName');
  const uDate = document.querySelector('#inputDate');
  const uTime = document.querySelector('#inputTime');
  const uNotes = document.querySelector('#inputTextarea');
  const uSelectPriority = document.querySelector('.select-task-priority');
  const listTodo = document.querySelector('.list-to-do-wrapper');
  const listCompleted = document.querySelector('.list-completed-wrapper');
  const uSelectSort = document.querySelector('.sort-date-created');
  const uSelectFilter = document.querySelector('.sort-task-priority');
  const uCountToDo = document.querySelector('.list-to-do-count');
  const uCountCompleted = document.querySelector('.list-completed-count');

  function newTask(e) {
    e.preventDefault();
    const taskObj = {
      name: uName.value,
      date: uDate.value,
      time: uTime.value,
      notes: uNotes.value,
      priority: uSelectPriority.value,
      completed: false,
    };
    arrTasks.push(taskObj);
    createNewTask(arrTasks);
    uName.value = '';
    uDate.value = '';
    uTime.value = '';
    uNotes.value = '';
    uSelectPriority.value = '';
    // console.log('new tasks ', arrTasks);
  }

  // ---------- ADD LIST TO DO ----------
  function createTask(name, date, time, notes, priority, completed, index, countFilter) {
    const countToDo = arrTasks.length;
    // console.log("arrTasks ", arrTasks);

    const newLi = document.createElement('li');
    newLi.className = 'list-to-do-item';
    listTodo.appendChild(newLi);

    const newPriority = document.createElement('p');
    newPriority.className = 'task-priority';
    newPriority.textContent = priority;
    newLi.appendChild(newPriority);

    const newDateTime = document.createElement('div');
    newDateTime.className = 'time-creation';
    newDateTime.textContent = `${date} ${time}`;
    newLi.appendChild(newDateTime);

    const newLogo = document.createElement('div');
    newLogo.className = 'task-logo';
    newLogo.textContent = 'L';
    newLi.appendChild(newLogo);

    const newTitle = document.createElement('h3');
    newTitle.className = 'task-title';
    newTitle.textContent = name;
    newLi.appendChild(newTitle);

    const newText = document.createElement('p');
    newText.className = 'task-text';
    newText.textContent = notes;
    newLi.appendChild(newText);

    const newActionTask = document.createElement('div');
    newActionTask.className = 'icon-ellipsis-vert';
    newLi.appendChild(newActionTask);

    const newActionTaskModal = document.createElement('div');
    newActionTaskModal.className = 'action-task-modal action-task-modal-hidden';
    newActionTask.appendChild(newActionTaskModal);

    // edit task
    const newEditTask = document.createElement('div');
    newEditTask.className = 'icon-edit';
    newEditTask.id = 'icon-edit';
    newActionTaskModal.appendChild(newEditTask);

    let newTextarea = null;
    newEditTask.onclick = function() {
      editStart();
    };
    function editStart() {
      newTextarea = document.createElement('textarea');
      newTextarea.className = 'form-control edit-task-textarea';
      newTextarea.value = newText.innerHTML;

      newTextarea.onkeydown = function(e) {
        if (e.key === 'Enter') {
          this.blur();
        }
      };

      newTextarea.onblur = function() {
        editEnd();
      };

      newText.replaceWith(newTextarea);
      newTextarea.focus();
    }

    function editEnd() {
      newText.innerHTML = newTextarea.value;
      newTextarea.replaceWith(newText);
      arrTasks[index].notes = newTextarea.value;
      // console.log('arrTasks edit', arrTasks);
      createNewTask(arrTasks);
    }

    // completed task check
    const newCompletedTaskCheck = document.createElement('div');
    newCompletedTaskCheck.className = 'icon-check';
    newCompletedTaskCheck.id = 'icon-check';
    newActionTaskModal.appendChild(newCompletedTaskCheck);

    newCompletedTaskCheck.addEventListener('click', () => {
      arrTasksCompleted.push(arrTasks[index]);
      arrTasks.splice(index, 1);
      createNewTask(arrTasks);
      createNewTaskCompleted(arrTasksCompleted);
    });

    // delete task
    const newDeleteTask = document.createElement('div');
    newDeleteTask.className = 'icon-trash-empty';
    newActionTaskModal.appendChild(newDeleteTask);
    newDeleteTask.addEventListener('click', () => {
      arrTasks.splice(index, 1);
      // console.log('arrTasks delete', arrTasks);
      createNewTask(arrTasks);
    });

    // show action task modal
    newActionTask.addEventListener('click', () => {
      if (newActionTaskModal.classList.contains('action-task-modal-hidden')) {
        newActionTaskModal.classList.remove('action-task-modal-hidden');
      } else {
        newActionTaskModal.classList.add('action-task-modal-hidden');
      }
    });

    // number of tasks in the list
    if (countToDo === undefined || countToDo < countFilter || countToDo >= countFilter) {
      uCountToDo.textContent = `(${countFilter})`;
    } else if (countFilter === undefined) {
      uCountToDo.textContent = `(${countToDo})`;
    } else {
      uCountToDo.textContent = '(0)';
    }
  }

  function createNewTask(arr, countFilter) {
    listTodo.innerHTML = '';
    arr.forEach(function(item, index) {
      createTask(
        item.name,
        item.date,
        item.time,
        item.notes,
        item.priority,
        item.completed,
        index,
        countFilter,
      );
    });
  }

  // ---------- ADD LIST COMPLETED ----------
  function createTaskCompleted(name, date, time, notes, priority, completed, index) {
    const countCompleted = arrTasksCompleted.length;
    // console.log("count arrTasksCompleted ", countCompleted);
    // console.log('arrTasksCompleted ', arrTasksCompleted);

    const newLi = document.createElement('li');
    newLi.className = 'list-completed-item';
    listCompleted.appendChild(newLi);

    const newPriority = document.createElement('p');
    newPriority.className = 'task-completed';
    newPriority.textContent = 'Completed!';
    newLi.appendChild(newPriority);

    const newIconPriority = document.createElement('i');
    newIconPriority.className = 'icon-ok-circled2';
    // newPriority.appendChild(newIconPriority);
    newPriority.prepend(newIconPriority);

    const newLogo = document.createElement('div');
    newLogo.className = 'task-logo';
    newLogo.textContent = 'L';
    newLi.appendChild(newLogo);

    const newTitle = document.createElement('h3');
    newTitle.className = 'task-title';
    newTitle.textContent = name;
    newLi.appendChild(newTitle);

    const newText = document.createElement('p');
    newText.className = 'task-text';
    newText.textContent = notes;
    newLi.appendChild(newText);

    const newActionTask = document.createElement('div');
    newActionTask.className = 'icon-ellipsis-vert';
    newLi.appendChild(newActionTask);

    const newActionTaskModal = document.createElement('div');
    newActionTaskModal.className = 'action-task-modal action-task-modal-hidden';
    newActionTask.appendChild(newActionTaskModal);

    // delete task
    const newDeleteTask = document.createElement('div');
    newDeleteTask.className = 'icon-trash-empty';
    newActionTaskModal.appendChild(newDeleteTask);
    newDeleteTask.addEventListener('click', () => {
      arrTasksCompleted.splice(index, 1);
      // console.log("arrTasksCompleted delete", arrTasksCompleted);
      createNewTaskCompleted(arrTasksCompleted);
    });

    // show action task modal
    newActionTask.addEventListener('click', () => {
      if (newActionTaskModal.classList.contains('action-task-modal-hidden')) {
        newActionTaskModal.classList.remove('action-task-modal-hidden');
      } else {
        newActionTaskModal.classList.add('action-task-modal-hidden');
      }
    });

    uCountCompleted.textContent = `(${countCompleted})`;
  }

  function createNewTaskCompleted(arr) {
    listCompleted.innerHTML = '';
    arr.forEach(function(item, index) {
      createTaskCompleted(
        item.name,
        item.date,
        item.time,
        item.notes,
        item.priority,
        (item.completed = true),
        index,
      );
    });
  }

  // ---------- TILED OR LIST VIEW OF TASKS ----------

  const btnTiledViewTasks = document.querySelector('.type-task-display-tiled');

  btnTiledViewTasks.addEventListener('click', () => {
    document.querySelectorAll('.list-to-do-item').forEach(el => {
      el.classList.add('list-tiled');
    });

    document.querySelectorAll('.list-completed-item').forEach(el => {
      el.classList.add('list-tiled');
    });
  });

  const btnInlineViewTasks = document.querySelector('.type-task-display-inline');

  btnInlineViewTasks.addEventListener('click', () => {
    document.querySelectorAll('.list-to-do-item').forEach(el => {
      el.classList.remove('list-tiled');
    });

    document.querySelectorAll('.list-completed-item').forEach(el => {
      el.classList.remove('list-tiled');
    });
  });
  // ---------------------------------------------

  // ---------- SORT BY DATE ----------
  uSelectSort.addEventListener('change', e => {
    if (e.target.value === 'up') {
      arrTasks.sort(function(a, b) {
        if (a.date.toLowerCase() > b.date.toLowerCase()) {
          return -1;
        }
        return 1;
      });
      createNewTask(arrTasks);
    } else {
      arrTasks.sort(function(a, b) {
        if (a.date.toLowerCase() > b.date.toLowerCase()) {
          return 1;
        }
        return -1;
      });
      createNewTask(arrTasks);
    }
  });

  // ---------- FILTER BY PRIORITY ----------
  uSelectFilter.addEventListener('change', e => {
    const searchPriority = e.target.value;
    const filteredTasks = arrTasks.filter(item => {
      if (item.priority.toLowerCase().indexOf(searchPriority.toLowerCase()) > -1) {
        return true;
      }
      if (searchPriority === 'all') {
        return true;
      }
      return false;
    });
    const countFilter = filteredTasks.length;
    createNewTask(filteredTasks, countFilter);
  });

  document.querySelector('#btn-add-task').onclick = newTask;
  createNewTask(arrTasks);
  createNewTaskCompleted(arrTasksCompleted);
})();
