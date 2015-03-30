// components
import Navbar from './Navbar.react';
import CategoryForm from './CategoryForm.react';
import TaskForm from './TaskForm.react';
import TaskList from './TaskList.react';
import RemoveCompletedTasksButton from './RemoveCompletedTasksButton.react';

// collections
import CategoryCollection from '../domain/CategoryCollection';

var App = React.createClass({
    getInitialState: function() {
        return {
            categories: new CategoryCollection(),
            tasks: []
        }
    },

    componentDidMount: function() {
        this.state.categories.fetch();

        this.state.categories.on('all', () => {
            this.setState({categories: this.state.categories});
        });
    },

    componentWillUnmount: function() {
        this.state.categories.off('all');
    },

    render: function() {
        return (
            <section>
                <Navbar title="Task Manager" />

                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <TaskList categories={this.state.categories} />
                        </div>
                        
                        <div className="col-md-6">
                            <CategoryForm categories={this.state.categories} />
                            <TaskForm categories={this.state.categories} />

                            <hr/>

                            <RemoveCompletedTasksButton />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});

export default App;