var TaskModel = require('../../../../babelified/domain/TaskModel.js');

describe('TaskModel', function() {
    'use strict';

    beforeEach(function() {
        spyOn($, 'ajax');
        
        this.taskModel = new TaskModel();
        this.taskModel.set('id', 1);
    });

    it('toggleStatus() from 0 to 2', function() {
        this.taskModel.set('status', 0);

        this.taskModel.toggleStatus();

        expect($.ajax).toHaveBeenCalledWith(jasmine.objectContaining({
            type: 'PUT',
            url: 'http://localhost:3000/tasks/1'
        }));

        expect(this.taskModel.get('status')).not.toBe(0);
        expect(this.taskModel.get('status')).toBe(2);
    });

    it('toggleStatus() from 2 to 0', function() {
        this.taskModel.set('status', 2);

        this.taskModel.toggleStatus();

        expect($.ajax).toHaveBeenCalledWith(jasmine.objectContaining({
            type: 'PUT',
            url: 'http://localhost:3000/tasks/1'
        }));

        expect(this.taskModel.get('status')).not.toBe(2);
        expect(this.taskModel.get('status')).toBe(0);
    });

});