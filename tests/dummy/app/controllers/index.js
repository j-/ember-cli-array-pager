import Em from 'ember';
import ArrayPager from 'array-pager';
import ArraySequence from 'array-sequence';

var IndexController = Em.Controller.extend({
	count: 15,

	input: function () {
		return ArraySequence.create({
			offset: 1,
			length: this.get('count')
		});
	}.property(),

	output: ArrayPager.computed.page('input', 1, 5),

	actions: {
		offset: function (inc) {
			this.get('output').incrementProperty('offset', inc);
		},
		limit: function (inc) {
			this.get('output').incrementProperty('limit', inc);
		},
		page: function (inc) {
			this.get('output').incrementProperty('page', inc);
		},
		items: function (inc) {
			this.incrementProperty('input.length', inc);
		}
	}
});

export default IndexController;
