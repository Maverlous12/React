import React, { Component } from "react";

class TaskItem extends Component {
    onDelete = () => {
        this.props.onDelete(this.props.task.id);
    }
    onUpdate = () => {
        this.props.onUpdate(this.props.task.id)
    }


  render() {
    var { task, index } = this.props;
    return (
      <tr>
        <td className="text-center">{index + 1}</td>
        <td className="text-center">{task.name}</td>
        <td className="text-center"> {task.age} </td>
        <td className="text-center">{task.genre === true ? 'Male' : 'Female' }</td>
        <td className="text-center">
          <button
            type="button"
            className="btn btn-sm btn-warning"
            style={{ marginRight: "20px" }}
            onClick={ this.onUpdate }
          >
            <span className="fa fa-pencil mr-5"></span> Edit
          </button>
          <button type="button" className="btn btn-sm btn-danger" onClick={this.onDelete}>
            <span className="glyphicon glyphicon-trash"></span> Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default TaskItem;
