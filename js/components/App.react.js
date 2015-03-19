// components
import Navbar from './Navbar.react';

var App = React.createClass({
    render: function() {
        return (
            <section>
                <Navbar title="React Workshop" />
            </section>
        );
    }
});

export default App;