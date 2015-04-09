var RemoveCompletedTasksButton = React.createClass({
    render: function() {
        return (
            <button type="button" className="btn btn-primary" onClick={this.props.removeCompletedTasks}>Remove Completed</button>
        );
    }
});

export default RemoveCompletedTasksButton;