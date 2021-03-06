import '../css/reset.css';
import '../css/style.css';
import '../css/fontello.css';

// Browser compatibility ie11 (forEach)
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function(callback, thisArg) {
    // eslint-disable-next-line no-param-reassign
    thisArg = thisArg || window;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

const colorHightPriority = 'rgb(75, 129, 220)';
const colorMediumPriority = 'rgb(26, 212, 172)';
const colorLowPriority = 'rgb(42, 212, 26)';

/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
// ---------- ADD FORM ----------
const btnAddTask = document.querySelector('#add-task');
btnAddTask.addEventListener('click', () => {
  // Array.prototype.slice.call(document.querySelectorAll('#hide-form')).forEach(elem => {
  //   elem.style.display = elem.style.display === 'flex' ? 'none' : 'flex';
  // });
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
    colorTask: 'rgb(75, 129, 220)',
  },
  {
    name: 'Norem, ipsum 2.',
    date: '2018-08-02',
    time: '18:30',
    notes: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    priority: 'Medium Priority',
    completed: false,
    colorTask: 'rgb(26, 212, 172)',
  },
  {
    name: 'Torem, ipsum 3.',
    date: '2019-11-21',
    time: '11:30',
    notes:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ex enim veniam iure quidem neque aperiam, esse eius, temporibus nemo sit, nihil quae libero accusamus excepturi eos. Cumque, culpa tempora odio fugiat voluptatem, veniam perferendis quisquam eum quia incidunt adipisci nisi nesciunt dignissimos officia maiores voluptates amet alias animi earum.',
    priority: '↓ Low Priority',
    completed: false,
    colorTask: 'rgb(42, 212, 26)',
  },
  {
    name: 'Korem, ipsum 4.',
    date: '2017-09-15',
    time: '10:12',
    notes:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ex enim veniam iure quidem neque aperiam, esse eius, temporibus nemo sit, nihil quae libero accusamus excepturi eos. Cumque, culpa tempora odio fugiat voluptatem, veniam perferendis quisquam eum quia incidunt adipisci nisi nesciunt dignissimos officia maiores voluptates amet alias animi earum.',
    priority: 'Medium Priority',
    completed: false,
    colorTask: 'rgb(26, 212, 172)',
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
    colorTask: 'rgb(75, 129, 220)',
  },
  {
    name: 'СLorem, ipsum 2.',
    date: '2018-08-02',
    time: '18:30',
    notes: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    priority: 'Medium Priority',
    completed: true,
    colorTask: 'rgb(26, 212, 172)',
  },
  {
    name: 'СLorem, ipsum 3.',
    date: '2019-11-21',
    time: '11:30',
    notes:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ex enim veniam iure quidem neque aperiam, esse eius, temporibus nemo sit, nihil quae libero accusamus excepturi eos. Cumque, culpa tempora odio fugiat voluptatem, veniam perferendis quisquam eum quia incidunt adipisci nisi nesciunt dignissimos officia maiores voluptates amet alias animi earum.',
    priority: '↓ Low Priority',
    completed: true,
    colorTask: 'rgb(42, 212, 26)',
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
      colorTask: 'rgb(108, 110, 112)',
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
  function createTask(name, date, time, notes, priority, completed, colorTask, index, countFilter) {
    const countToDo = arrTasks.length;
    // console.log('arrTasks ', arrTasks);
    // console.log(index + ' ' + colorTask);

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
    newLogo.textContent = name.charAt(0).toUpperCase();
    if (priority === '↑ Hight Priority') {
      newLogo.style.backgroundColor = colorHightPriority;
      arrTasks[index].colorTask = colorHightPriority;
    } else if (priority === 'Medium Priority') {
      newLogo.style.backgroundColor = colorMediumPriority;
      arrTasks[index].colorTask = colorMediumPriority;
    } else {
      newLogo.style.backgroundColor = colorLowPriority;
      arrTasks[index].colorTask = colorLowPriority;
    }
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
    newActionTask.className = 'icon-ellipsis-vert dropbtn';
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
        item.colorTask,
        index,
        countFilter,
      );
    });
  }

  // ---------- ADD LIST COMPLETED ----------
  function createTaskCompleted(name, date, time, notes, priority, completed, colorTask, index) {
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
    // newPriority.prepend(newIconPriority);
    newPriority.insertAdjacentElement('afterbegin', newIconPriority);

    const newLogo = document.createElement('div');
    newLogo.className = 'task-logo';
    newLogo.textContent = name.charAt(0).toUpperCase();
    newLogo.style.backgroundColor = colorTask;
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
        item.colorTask,
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
  const btnSortDate = document.querySelector('.icon-sort-alphabet');
  const sortItem = document.querySelectorAll('.sort__item');

  function sortDate() {
    sortItem.forEach(items => {
      // console.log('items sort ', items);
      // console.log('items id ', id);
      items.addEventListener('click', item => {
        // const { dataset } = item.target;
        const dataset = Object.values(item.target.dataset);
        // console.log('sort item dataset ', dataset);
        if (dataset[0] === 'new') {
          arrTasks.sort((a, b) => {
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
    });
  }

  /* toggle between hiding and showing the dropdown content */
  btnSortDate.addEventListener('click', () => {
    document.getElementById('dropdown-sort-list').classList.toggle('show');
    sortDate();
  });

  // const uSelectSort = document.querySelector('.sort-date-created');
  // uSelectSort.addEventListener('change', e => {
  //   if (e.target.value === 'up') {
  //     arrTasks.sort(function(a, b) {
  //       if (a.date.toLowerCase() > b.date.toLowerCase()) {
  //         return -1;
  //       }
  //       return 1;
  //     });
  //     createNewTask(arrTasks);
  //   } else {
  //     arrTasks.sort(function(a, b) {
  //       if (a.date.toLowerCase() > b.date.toLowerCase()) {
  //         return 1;
  //       }
  //       return -1;
  //     });
  //     createNewTask(arrTasks);
  //   }
  // });

  // ---------- FILTER BY PRIORITY ----------
  const filterItem = document.querySelectorAll('.filter__item');
  const btnFilterPriority = document.querySelector('.icon-filter');
  function filterPrior() {
    filterItem.forEach(items => {
      // console.log('items ', items);
      items.addEventListener('click', item => {
        const searchPriority = Object.keys(item.target.dataset);
        const filteredTasks = arrTasks.filter(it => {
          if (it.priority.toLowerCase().indexOf(searchPriority[0].toLowerCase()) > -1) {
            return true;
          }
          if (searchPriority[0] === 'all') {
            return true;
          }
          return false;
        });
        const countFilter = filteredTasks.length;
        createNewTask(filteredTasks, countFilter);
      });
    });
  }

  /* toggle between hiding and showing the dropdown content */
  btnFilterPriority.addEventListener('click', () => {
    document.getElementById('dropdown-filter-list').classList.toggle('show');
    filterPrior();
  });

  // const uSelectFilter = document.querySelector('.sort-task-priority');
  // uSelectFilter.addEventListener('change', e => {
  //   const searchPriority = e.target.value;
  //   // console.log('select ', searchPriority);
  //   const filteredTasks = arrTasks.filter(item => {
  //     console.log('item ', item);
  //     if (item.priority.toLowerCase().indexOf(searchPriority.toLowerCase()) > -1) {
  //       return true;
  //     }
  //     if (searchPriority === 'all') {
  //       return true;
  //     }
  //     return false;
  //   });
  //   const countFilter = filteredTasks.length;
  //   createNewTask(filteredTasks, countFilter);
  // });

  // Close the dropdown if the user clicks outside of it
  window.onclick = event => {
    // console.log('event ', event);
    if (!event.target.matches('.dropbtn')) {
      // const dropdowns = document.getElementsByClassName('dropdown-filter-content');
      const dropdowns = document.querySelectorAll('.ad');
      // console.log('dropdowns ', dropdowns)
      for (let i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };

  document.querySelector('#btn-add-task').onclick = newTask;
  createNewTask(arrTasks);
  createNewTaskCompleted(arrTasksCompleted);
})();
