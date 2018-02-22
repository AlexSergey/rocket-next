import React, { Component } from 'react';
import InputText from '../../../components/Input-text.jsx';

export default class AddTodo extends Component {
    render() {
        return (
            <ul className="todo-controls">
                <li>
                    <span>Add new:</span>
                    <form className="todoForm" onSubmit={this.handleClick.bind(this)}>
                        <InputText
                            field={'todo-input'}
                            ref={(component) => this.todoInput = component}
                        />
                    </form>
                </li>
            </ul>
        );
    }

    handleClick(e) {
        e.preventDefault();
        const node = this.todoInput.refs.input;
        const value = node.value;
        const text = value.trim();
        this.props.addTodo(text);
        node.value = '';
    }
}
