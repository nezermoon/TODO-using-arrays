const list = [ 
	{ 
			id: 1,
			name: 'create a post', 
			status: 'TODO', 
			priority: 'low'  
	}, 
	{ 
			id: 2,
			name: 'test', 
			status: 'Done', 
			priority: 'high'  
	} 
]

let newList = list;

function changeStatus(name, status) {
	const statusToChange = list.find(item => item.name == name);
	statusToChange.status = status;
}

function createTaskID() {
	const arrayOfBusyIDs = newList.map(task => task.id);
	for (let i = 1; i <= arrayOfBusyIDs.length + 1; i++) {
		if (!arrayOfBusyIDs.includes(i)) return i;
	}
}

function addTask(name, priority) {
	newList.push( {id: createTaskID(), name, status: 'TODO', priority} );
	let id = 1;
}

function deleteTask(name) {
	let taskToDelete = name;
	newList.filter(item => item.name !== taskToDelete);
}

function showList() {

	console.log('To Do:');
	let toDoTasks = newList.filter(item => item.status == 'TODO');
	if(toDoTasks == false) {
		console.log('-');
	} else {
			for(let i = 0; i < toDoTasks.length; i++) {
			console.log(` ${toDoTasks[i].name} (priority: ${toDoTasks[i].priority})`);
		}
	}

	console.log('In Progress:');
	let tasksInProgress = newList.filter(item => item.status == 'In progress');
	if(tasksInProgress == false) {
		console.log('-');
	} else {
			for(let i = 0; i < tasksInProgress.length; i++) {
			console.log(` ${tasksInProgress[i].name} (priority: ${tasksInProgress[i].priority})`);
		}
	}

	console.log('Done:');
	let tasksDone = newList.filter(item => item.status == 'Done');
	if(tasksDone == false) {
		console.log('-');
	} else {
			for(let i = 0; i < tasksDone.length; i++) {
			console.log(` ${tasksDone[i].name} (priority: ${tasksDone[i].priority})`);
		}
	}

}

// addTask('test1', 'low');
// addTask('test2', 'medium');
// addTask('test3', 'high');
// addTask('test4', 'low');
// addTask('test5', 'high');

// changeStatus('test1', 'In progress');
// changeStatus('test2', 'Done');

// deleteTask('test4');
// deleteTask('test1');

showList();

// console.log(list);