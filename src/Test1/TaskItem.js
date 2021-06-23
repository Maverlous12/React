import React , { Component } from 'react';


class TaskItem extends Component {
    render () {
        var { task, index } = this.props;
        console.log(task);
        return (
            <tr>
                                    <td className="text-center">{index+1}</td>
                                    <td className="text-center">{task.name}</td>
                                    <td className="text-center"> 25 </td>
                                    <td className="text-center">Male</td>
                                    <td className="text-center">
                                        <button type="button" className="btn btn-sm btn-warning" style={{ 'marginRight': '20px' }}>
                                            <span className="fa fa-pencil mr-5"></span> Edit
                                        </button>

                                        <button type="button" className="btn btn-sm btn-danger">
                                            <span className="glyphicon glyphicon-trash"></span> Delete
                                        </button>   
                                    </td>
                                </tr>
        );
    }
}

export default TaskItem;