class ShoppingListItem extends React.Component {
    render() {
        return (
            <li>{this.props.item.name}</li>
        );
    }
}

class ShoppingList extends React.Component {
    render() {
        var items = this.props.items.map(function(item, i) {
            return (
                <ShoppingListItem item={item} key={i}/>
            );
        });

        return (
            <div className="shoppingList">
                <h3>There are {this.props.items.length} items in the shopping list</h3>

                <ul>{items}</ul>
            </div>
        );
    }
}

export default ShoppingList;