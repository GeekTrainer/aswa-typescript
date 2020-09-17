interface Task {
    title: string;
}

const task: Task = {
    title: 'Version 2'
}

document.getElementById('task').innerText = task.title;
