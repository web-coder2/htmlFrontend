let app = new Vue ({
    el: '#app',
    data() {
        return {
            ell: 'Beta version',
            taskArray: [
                { name: 'API модуль', dev: 'web-coder', state: 'backlog', required: 'hight'},
                { name: 'интерфейс для модуля', dev: 'web-coder', state: 'testing', required: 'hight'},
                { name: 'Личный кобинет', dev: 'web-coder', state: 'done', required: 'low'},
                { name: 'модальное окно', dev: 'web-coder', state: 'done', required: 'low'},
                { name: 'метрика console-warn', dev: 'web-coder', state: 'progress', required: 'medium'},
                { name: 'CI/CD девопс', dev: 'web-coder', state: 'testing', required: 'low'},
                { name: 'формы создания vue.js', dev: 'web-coder', state: 'backlog', required: 'hight'},
            ],
            renderedTaskArray: {},
            usersCompany: [
                { name: 'web-coder', dev: 'backend', id: 142435232 },
                { name: 'mrRobot', dev: 'devops', id: 2335434355 }
            ],
            requirementsList: ['hight', 'medium', 'low'],
            newTask: {
                name: 'API',
                dev: 'web-coder',
                required: "medium"
            }
        }
    },
    methods: {
        getTaskColor(task) {
            let color

            if (task.required === 'hight') {
                color = 'red'
            } else if (task.required === 'medium') {
                color = 'yellow'
            } else if (task.required === 'low') {
                color = 'green'
            }

            return color
        },
        renderTaskArray() {
            const groupedTasks = {
                backlog: [],
                progress: [],
                testing: [],
                done: []
            };

            this.taskArray.forEach(task => {
                if (groupedTasks.hasOwnProperty(task.state)) {
                    groupedTasks[task.state].push(task);
                }
            });

            this.renderedTaskArray = groupedTasks;
        },
        taskNextState(task) {

            let nextState

            if (task.state === 'backlog') {
                nextState = 'progress'
            } else if (task.state === 'progress') {
                nextState = 'testing'
            } else if (task.state === 'testing') {
                nextState = 'done'
            }

            let updatedTask = {
                ...task,
                state: nextState
            };

            const index = this.taskArray.findIndex(t => t.name === task.name);

            if (index === -1) {
                return;
            }

            this.taskArray.splice(index, 1);

            this.taskArray.push(updatedTask);
            
            this.renderTaskArray()
        },
        addNewTask() {
            this.taskArray.push({
                name: this.newTask.name,
                dev: this.newTask.dev,
                state: 'backlog',
                required: this.newTask.required
            });

            this.renderTaskArray()

            this.newTask = {
                name: 'API',
                dev: 'web-coder',
                required: "medium"
            }
        }
    },
    beforeMount() {
        this.renderTaskArray()
    }
})