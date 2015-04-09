import CategorySelect from './CategorySelect.react';

var TaskForm = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();

        var task = this.refs.task.getDOMNode().value.trim();
        var category = this.refs.category.getDOMNode().value.trim();

        if (!task || !category) {
            return;
        }

        this.props.tasks.create({
            name: task,
            category: parseInt(category)
        });

        this.refs.task.getDOMNode().value = '';
    },

    render: function() {
        return (
            <form role="form" className="taskForm" onSubmit={this.handleSubmit}>
                <h3>Create Task</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" ref="task" />
                </div>
        
                <div className="form-group">
                    <label>Category</label>
                    <CategorySelect categories={this.props.categories} ref="category" />
                </div>
        
                <p><button type="submit" className="btn btn-primary">Submit</button></p>
            </form>
        );
    }
});

export default TaskForm;