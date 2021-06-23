import React , {Component} from 'react';

class TaskForm extends Component {

    onCloseForm = () => {
        this.props.onCloseForm();
    }

    render() {
        return (
            <div className='panel panel-warning'>
                <div className='panel-heading'>
                    <h3 className='panel-title'>
                        Create User
                        <span className='fa fa-times-circle text-right' onClick={ this.onCloseForm }>
                            
                        </span>
                        
                    </h3>

                </div>

            </div>
        )


    }
}

export default TaskForm;