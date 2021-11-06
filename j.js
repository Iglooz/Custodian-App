let custodianApp = new Vue ({
    el: "#custodianApp",
    data: {
       myTodo: undefined,
       apartmentNumber: undefined,
       date: undefined,
       description: undefined,
       todoList: [],
       finishedAssignments: [],
       a: 0,
       showIncomplete: true,
       showComplete: false,
    },
    methods: {
        add() {
            let m = {myTodo: this.myTodo, apartmentNumber: this.apartmentNumber, date: this.date, description: this.description}
            this.todoList.push(m)




        },
        finished(todo){
            

            console.log(todo)
            let idx = this.todoList.indexOf(todo)
            this.finishedAssignments.push(todo)
            this.todoList.splice(idx, 1)
            console.log(this.todoList)

        },
        displayTasks() {
            this.showIncomplete = true;
            this.showComplete = false;

        },
        displayFinished(){
            this.showIncomplete = false;
            this.showComplete = true;
        }

    },
})