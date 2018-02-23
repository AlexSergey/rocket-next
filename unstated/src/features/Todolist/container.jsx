import { Container } from 'unstated';

export default class Todolist extends Container {
    state = {
        todos: [],
        filter: 'SHOW_ALL'
    };
    addTodo = payload => {
        let todos = this.state.todos.map(i => i);
        todos.push({ text: payload, completed: false });
        this.setState({
            todos
        });
    };
    onCompletedTodo = index => {
        this.setState({
            todos: this.state.todos.map((item, i) => {
                if (index === i) {
                    item.completed = !item.completed;
                }
                return item;
            })
        });
    };
    onRemoveTodo = index => {
        this.setState({
            todos: this.state.todos.filter((item, i) => {
                return index !== i;
            })
        });
    };
    filterApply = filter => {
        console.log(filter)
        this.setState({
            filter
        });
    };
}