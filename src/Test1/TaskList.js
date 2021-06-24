import React , { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {
    render() {
        var { tasks } = this.props;

        var elmTasks = tasks.map((task, index) => {
            return <TaskItem　
                    key={task.id} 
                    index={index} 
                    task={task} 
                    onDelete={this.props.onDelete}
                    onUpdate={this.props.onUpdate}
                    
                    />
        });

        return (
            <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th className="text-center">ID</th>
                            <th className="text-center">Name</th>
                            <th className="text-center">Age</th>
                            <th className="text-center">Genre</th>
                            <th className="text-center">Action</th>
                        </tr>
                        { elmTasks }
                    </thead>
                   

                </table>



        )
    }

}
export default TaskList;