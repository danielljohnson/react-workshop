var _ = require('lodash'),
    Category = require('./domain/Category.js'),
    Task = require('./domain/Task.js'),
    repository = require('./repository.js');

var fixtures = (function() {
    var loadCategories = function() {
        var categories = [{
            name: 'Home'
        },{
            name: 'Work'
        }];
    
        _.forEach(categories, function(item) {
            repository.categories.push(new Category(item));
        });
    };
    
    var loadTasks = function() {
        var tasks = [{
            name: 'Cook Dinner',
            category: 1,
            status: 0
        },{
            name: 'Clean out inbox',
            category: 2,
            status: 0
        },{
            name: 'Play ping pong',
            category: 2,
            status: 2
        }];
    
        _.forEach(tasks, function(item) {
            repository.tasks.push(new Task(item));
        });
    };
    
    return {
        loadAll: function() {
            loadCategories();
            loadTasks();
        }
    };
})();

module.exports = fixtures;