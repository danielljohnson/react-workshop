import CategorySelect from './CategorySelect.react';

var TaskForm = React.createClass({
    render: function() {
        return (
            <form role="form" className="taskForm">
                <div className="form-group">
                    <label>Task</label>
                    <input type="text" className="form-control" ref="task" />
                </div>
        
                <div className="form-group">
                    <label>Category</label>
                    <CategorySelect categories={this.props.categories} ref="category" />
                </div>
        
                <p><button type="submit" className="btn btn-primary">Add Task</button></p>
            </form>
        );
    }
});

export default TaskForm;