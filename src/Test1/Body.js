import React, { Component } from 'react';
import './Body.css';
import TaskList from './TaskList';

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
    render() {
        var { tasks, isDisplayForm } = this.state;
        var elmTaskForm = isDisplayForm ? <TaskForm/> : '';

        return (
            
            <div className="container">
                
                <button type="button" class="btn btn-info" onClick={}>button</button>
                
                {isDisplayForm ? "fucntionToGenerateForm" : ""}
                <div className="text-center">
                    <h1>List User</h1>
                </div>
                <div>
                    {elmTaskForm}
                </div>
                <button type="button" className="btn btn-info" onClick={ this.onGenerateData } style={{"marginBottom" : "15px"}}>
                <i className="fa fa-plus-circle" style={{"marginRight" : "5px"}} ></i>Generate</button>

                < TaskList tasks={ tasks }  />
                
            </div>
        );
    }
}
     
export default Body;