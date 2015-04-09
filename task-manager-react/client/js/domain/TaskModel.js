var TaskModel = Backbone.Model.extend({
    urlRoot: 'http://localhost:3000/tasks',
    
    toggleStatus: function() {
        if (this.get('status') === 0) {
            this.set('status', 2);
        } else {
            this.set('status', 0);    
        }

        this.save();
    }
});

export default TaskModel;