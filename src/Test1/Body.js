import React, { Component } from 'react';
import './Body.css';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks : [],
            isDisplayForm : false
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

    onGenerateData = () => {
        var tasks = [
            {
                id : 1,
                name : 'duong anh dung',
                age : 3,
                genre : 5,

            },
            {
                id : 3,
                name : 'duong anh dung',
                age : 3,
                genre : 5,

            },
            {
                id : 2,
                name : 'duong anh dung',
                age : 3,
                genre : 5,

            }
        ];
        this.setState({
            tasks : tasks
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        
    }
    onToggleForm = () => {
        this.setState({
            isDisplayForm : !this.state.isDisplayForm 
        });
    }

    onCloseForm = () => {
        this.setState({
            isDisplayForm : false
        });


    }



    render() {
        var { tasks, isDisplayForm } = this.state;
        var elmTaskForm = isDisplayForm ? <TaskForm onCloseForm={this.onCloseForm}/> : '';

        return (
            
            <div className="container">
                <div className="text-center">
                    <h1>List User</h1>
                </div>
                <div className={ isDisplayForm ? <TaskForm/> : ''}>
                    {elmTaskForm}
                </div>
                <button 
                type="button" className="btn btn-warning" 
                onClick={ this.onToggleForm } style={{"marginBottom" : "15px"}}>
                <i className="fa fa-plus-circle" style={{"marginRight" : "5px"}} ></i>Add more</button>

                <button type="button" className="btn btn-info" onClick={ this.onGenerateData } style={{"marginBottom" : "15px"}}>
                <i className="fa fa-plus-circle" style={{"marginRight" : "5px"}} ></i>Generate</button>
                < TaskList tasks={ tasks }  />
            </div>
        );
    }
}
     
export default Body;