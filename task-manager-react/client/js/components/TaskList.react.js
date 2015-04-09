var CategoryListItem = React.createClass({
    render: function() {
        var taskList = this.props.tasks.map(function(task, i) {
            return (
                <TaskListItem key={i} item={task} />
            );
        });

        return (
            <li>{this.props.category.get('name')}
                <ul>
                    {taskList}
                </ul>
            </li>
        );
    }
});

var TaskListItem = React.createClass({
    completeTask: function(e) {
        e.preventDefault();

        this.props.item.toggleStatus();
    },

    render: function() {
        return (
            <li data-status={this.props.item.get('status')}><a href="#" onClick={this.completeTask}>{this.props.item.get('name')}</a></li>
        );
    }
});

var TaskFilter = React.createClass({
    render: function() {
        return (
            <input type="text" placeholder="Filter Tasks" className="form-control" onKeyUp={this.props.filterTasks.bind(null, this)} />
        );
    }
});

var TaskList = React.createClass({
    getInitialState: function() {
        return {
            tasks: this.props.tasks.models,
            filteredTasks: this.props.tasks.models
        }
    },

    filterTasks: function(val) {
        var query = val.getDOMNode().value.trim();
        var filtered;

        if (query === '') {
            filtered = this.state.tasks;
        } else {
            filtered = this.state.tasks.filter((item) => {
                return item.get('name').indexOf(query) === 0;
            });
        }

        this.setState({filteredTasks: filtered});
    },

    render: function() {
        var categoryList = this.props.categories.map((category, i) => {
            var tasks = this.state.filteredTasks.filter((item) => {
                return item.get('category') === category.get('id');
            });
            
            return (
                <CategoryListItem key={i} category={category} tasks={tasks} />
            );
        });

        return (
            <section className="taskList">
                <h3>Task List</h3>

                <TaskFilter filterTasks={this.filterTasks} />

                <ul>
                    {categoryList}
                </ul>
            </section>
        );
    }
});

export default TaskList;