let tasks =[];

const addTask = () =>{
    const taskInput = document.getElementById('taskInput');
    const text = taskInput.value.trim();

    if (text){
        tasks.push({text:text , completed: false});

        taskInput.value="";
        updateTasksList();
    }
};

const updateTasksList = () => {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    tasks.forEach(task =>{
        const listItem = document.createElement("li");

        listItem.innerHTML = ''

        ;
    })
}
document.getElementById("newTask").addEventListener("click", function(e){
    e.preventDefault();

    addTask();
})