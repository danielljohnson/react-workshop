import TaskModel from './TaskModel';

var TaskCollection = Backbone.Collection.extend({
    url: 'http://localhost:3000/tasks',

    model: TaskModel,

    removeCompleted: function() {
        var completed = _.filter(this.models, function(task) {
            return task.get('status') === 2;
        });

        _.forEach(completed, function(task) {
            task.destroy();
        });
    }
});

export default TaskCollection;