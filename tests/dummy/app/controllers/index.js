import Em from 'ember';
import ArrayPager from 'array-pager';
var computed = Em.computed;

var IndexController = Em.Controller.extend({
	input: Em.A(),

	output: ArrayPager.computed.page('input', 5),

	addItems: function (n) {
		for (var i = 0; i < n; i++) {
			this.addItem();
		}
	},

	addItem: function () {
		var input = this.get('input');
		var value = Em.get(input, 'length') + 1;
		input.pushObject(value);
	},

	removeItems: function (n) {
		var input = this.get('input');
		var length = Em.get(input, 'length');
		var index = Math.max(length - n, 0);
		input.replace(index, n);
	},

	init: function () {
		this.addItems(10);
	},

	actions: {
		offset: function (inc) {
			this.get('output').incrementProperty('offset', inc);
		},
		page: function (inc) {
			this.get('output').incrementProperty('page', inc);
		},
		limit: function (inc) {
			this.get('output').incrementProperty('limit', inc);
		},
		items: function (inc) {
			if (inc >= 0) {
				this.addItems(inc);
			}
			else {
				this.removeItems(-inc);
			}
		},
		goTo: function (dir) {
			if (dir === 'first') {
				this.get('output').goToFirstPage();
			}
			else if (dir === 'last') {
				this.get('output').goToLastPage();
			}
		}
	}
});

export default IndexController;
