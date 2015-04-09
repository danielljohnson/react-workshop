var CategoryForm = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();

        // get form field value
        var category = this.refs.category.getDOMNode().value.trim();
        
        if (!category) {
            return;
        }

        // save to server
        this.props.categories.create({
            name: category
        });

        // clear form field
        this.refs.category.getDOMNode().value = '';
    },

    render: function() {
        return (
            <form role="form" className="categoryForm" onSubmit={this.handleSubmit}>
                <h3>Create Category</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" ref="category" />
                </div>
        
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
});

export default CategoryForm;