import Navbar from './Navbar.react';
import ShoppingList from './ShoppingList.react';

// mock data
var items = [{
    name: 'broccoli'
},{
    name: 'pasta'
},{
    name: 'scallops'
}];

class App extends React.Component {
    render() {
        return (
            <section>
                <Navbar title="React Workshop" />

                <div className="container">
                    <ShoppingList items={items} />
                </div>
            </section>
        );
    }
}

export default App;