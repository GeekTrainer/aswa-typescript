interface Task {
    title: string;
}

const task: Task = {
    title: 'Clean office'
}

document.getElementById('task').innerText = task.title;
