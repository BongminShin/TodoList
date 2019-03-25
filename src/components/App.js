import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoList from './TodoList'
import TodoInput from './TodoInput';

class App extends Component {
    render() {
        return (
            <PageTemplate>
                <TodoInput/>
                <TodoList/>
            </PageTemplate>
        );
    }
}

export default App;