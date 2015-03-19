// components
import Navbar from './Navbar.react';

var App = React.createClass({
    render: function() {
        return (
            <section>
                <Navbar title="React Workshop" />

                <div className="container">
                    <p>Hello World!</p>
                </div>
            </section>
        );
    }
});

export default App;