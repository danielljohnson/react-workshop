var TaskList = React.createClass({
    render: function() {
        var categoryList = this.props.categories.map((category, i) => {
            return (
                <li key={i}>{category.get('name')}</li>
            );
        });

        return (
            <ul className="taskList">
                {categoryList}
            </ul>
        );
    }
});

export default TaskList;