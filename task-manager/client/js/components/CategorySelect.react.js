var CategorySelectOption = React.createClass({
    render: function() {
        return (
            <option value={this.props.item.get('id')}>{this.props.item.get('name')}</option>
        );
    }
});

var CategorySelect = React.createClass({
    render: function() {
        var options = this.props.categories.map(function(item, i) {
            return (
                <CategorySelectOption item={item} key={i}/>
            );
        });

        return (
            <select className="form-control" ref="category">
                {options}
            </select>
        );
    }
});

export default CategorySelect;