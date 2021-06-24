import React , {Component} from 'react';

class TaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id : '',
            name : '',
            age : '',
            genre : false
        }


    }

    componentWillMount() {
        if(this.props.task){
            this.setState({
                id : this.props.task.id,
                name : this.props.task.name,
                age : this.props.task.age,
                genre : this.props.task.genre,
            });
        }

    }

    onCloseForm = () => {
        this.props.onCloseForm();
        this.onClear();
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(name ==='genre'){
            value = target.value === 'true' ? true : false 
        };
        this.setState({
            [name] : value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.onCloseForm();
        this.onClear();
    }

    onClear = () => {
        this.setState({
            id : '',
            name : '',
            age : '',
            genre : false
        });
    }



    render() {
        var { id } = this.state;
        return (
            <div className='panel panel-warning'>
                <div className='panel-heading'>
                    <h3 className='panel-title text-center'>
                        { id !== '' ? 'Update' : 'Create User'}   
                    </h3>

                </div>
                <div className='panel-body'>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>
                                Name 
                            </label>
                            <input className='form-control' type='text' name='name' value={this.state.name} onChange={this.onChange}>

                            </input>
                            <label>
                                Age
                            </label>
                            <input className='form-control' type='text' name='age'value={this.state.age} onChange={this.onChange}>

                            </input>
                            <label> Genre </label>
                            <select className='form-control' name='genre' value={this.state.genre} onChange={this.onChange}>
                                <option value={true} >Male</option>
                                <option value={false} >Female</option>

                            </select><br/>
                            <div className='text-center'>
                                
                                <button type="submit" class="btn btn-primary" style={{'marginRight':'15px'}} onClick={ this.onSubmit }>
                                    Save</button> 
                                <button type="submit" class="btn btn-danger"onClick={ this.onCloseForm }>
                                 Cancel</button>

                            </div>

                        </div>
                    </form>
                    
                </div>

            </div>
        )


    }
}

export default TaskForm;