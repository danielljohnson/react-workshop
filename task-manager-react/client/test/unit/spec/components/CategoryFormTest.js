var CategoryForm = require('../../../../babelified/components/CategoryForm.react.js');

var CategoryCollection = require('../../../../babelified/domain/CategoryCollection.js');

var TestUtils = React.addons.TestUtils;

describe('CategoryForm', function() {
    'use strict';

    beforeEach(function() {
        spyOn($, 'ajax');

        this.categories = new CategoryCollection();
    });

    it('API does not get called if form fails validation', function() {
        // create component
        var categoryForm = TestUtils.renderIntoDocument(
            <CategoryForm categories={this.categories}/>
        );

        // populate category input
        categoryForm.refs.category.getDOMNode().value = '';

        // make sure it's really populated
        expect(categoryForm.refs.category.getDOMNode().value).toEqual('');

        // get form tag
        var form = TestUtils.findRenderedDOMComponentWithTag(categoryForm, 'form');

        // click the form tag
        TestUtils.Simulate.submit(form);

        // look at the underlying jQuery request
        expect($.ajax).not.toHaveBeenCalled();
    });

});