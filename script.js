let todo = document.getElementById("inputbox")
let tasklist = document.getElementById("tasklist")

document.getElementById("add").onclick = function () {
    if (todo.value.length == 0) {
        alert("Enter task details")
    }
    else {
        tasklist.innerHTML = tasklist.innerHTML + `
        <div class="task">
            <span id="work">${todo.value}</span>
            <button class="del"><i class="fa fa-trash"></i></button>
        </div>`

        let alltasks = document.querySelectorAll('.del')
        for (i = 0; i < alltasks.length; i++) {
            alltasks[i].onclick = function () {
                this.parentNode.remove()
            }

        }
        todo.value = ""
    }
}

