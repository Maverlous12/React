import React, { Component } from 'react';
import './Body.css';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import { v4 as uuidv4 } from 'uuid';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks : [],
            isDisplayForm : false,
            taskEditing : null
        }
    }
    componentWillMount() {
        if(localStorage && localStorage.getItem('tasks')){
            var tasks = JSON.parse(localStorage.getItem('tasks'));
                this.setState({
                    tasks : tasks
                });
            };
    } 

    onToggleForm = () => {
        this.setState({
            isDisplayForm : !this.state.isDisplayForm ,
            taskEditing : null
        });
           
    }

    onCloseForm = () => {
        this.setState({
            isDisplayForm : false,
            taskEditing : null
        });
    }

    onShowForm = () => {
        this.setState({
            isDisplayForm : true
        });
    }

    onSubmit = (data) => {
        var { tasks } = this.state;
        if(data.id === ''){
            data.id = uuidv4() ;
            tasks.push(data);
        }else{
            var index = this.findIndex(data.id);
            tasks[index] = data;
        }
            this.setState({
            tasks : tasks,
            taskEditing : null
        });
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    findIndex = (id) =>{
        var { tasks } = this.state;
        var result = -1
        tasks.forEach((task, index) => {
            if(task.id === id ){
                result = index;
            }
        });
        return result;
    }

    onDelete = (id) =>{
        var {tasks} = this.state;
        var index = this.findIndex(id)
        if(index !== -1){
            tasks.splice(index, 1);
            this.setState({
                tasks : tasks
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
        this.onCloseForm();
    }
    onUpdate = (id) => {
        var {tasks} = this.state;
        var index = this.findIndex(id);
        var taskEditing = tasks[index];
        this.setState({
            taskEditing : taskEditing

        });
        this.onShowForm();
       
    } 

    render() {
        var { tasks, isDisplayForm, taskEditing } = this.state;
        var elmTaskForm = isDisplayForm ? <TaskForm 
                                            onSubmit={this.onSubmit} 
                                            onCloseForm={this.onCloseForm}
                                            task={taskEditing}
                                            /> : '';


        return (
            <div className="container">
                <div className="text-center">
                    <h1>List User</h1>
                </div>
                <div className={ isDisplayForm ? <TaskForm/> : ''}>
                    {elmTaskForm}
                </div>
                <button 
                type="button" className="btn btn-primary" 
                onClick={ this.onToggleForm } style={{"marginBottom" : "15px"}}>
                <i className="fa fa-plus-circle" style={{"marginRight" : "5px"}} ></i>Add more</button>

                < TaskList tasks={ tasks }
                           onDelete={this.onDelete} 
                           onUpdate={this.onUpdate}
                           />
            </div>
        );
    }
}
     
export default Body;