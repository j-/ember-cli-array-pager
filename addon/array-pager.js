import Em from 'ember';
import ArraySlice from 'array-slice';

var computed = Em.computed;
var lte = computed.lte;
var max = Math.max;
var ceil = Math.ceil;

var ArrayPager = ArraySlice.extend({
	// 1-based
	page: computed('offset', 'limit', {
		get: function () {
			var limit = this.get('limit');
			var offset = this.get('offset') || 0;
			return ceil(offset / limit) || 1;
		},
		set: function (key, page) {
			var limit = this.get('limit');
			var offset = this.get('offset');
			// no negative pages
			page = max(page - 1, 0);
			offset = (limit * page) || 0;
			this.set('offset', offset);
			return page + 1;
		}
	}),

	// 1-based
	pages: computed('content.length', 'limit', {
		get: function () {
			var limit = this.get('limit');
			var length = this.get('content.length');
			var pages = ceil(length / limit) || 1;
			if (pages === Infinity) {
				pages = 0;
			}
			return pages;
		},
		set: function () {
			throw new Error('Cannot set `pages` property of array pager');
		}
	}),

	isFirstPage: lte('page', 1),

	isLastPage: computed('page', 'pages', {
		get: function () {
			var page = this.get('page');
			var pages = this.get('pages');
			var isLast = page >= pages;
			return isLast;
		}
	}),

	goToFirstPage: function () {
		this.set('page', 0);
	},

	goToLastPage: function () {
		var max = this.get('pages');
		this.set('page', max);
	}
});

ArrayPager.computed = {
	page: function (prop, limit, page) {
		return computed({
			get: function () {
				return ArrayPager.create({
					content: this.get(prop),
					page: (page || 0),
					limit: limit
				});
			}
		});
	}
};

export default ArrayPager;
