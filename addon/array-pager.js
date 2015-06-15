import Em from 'ember';
import ArraySlice from 'array-slice';
var computed = Em.computed;
var equal = computed.equal;
var get = Em.get;
var set = Em.set;
var max = Math.max;
var ceil = Math.ceil;

var ArrayPager = ArraySlice.extend({
	// 1-based
	page: computed('offset', 'limit', {
		get: function () {
			var limit = get(this, 'limit');
			var offset = get(this, 'offset') || 0;
			return ceil(offset / limit) || 1;
		},
		set: function (key, page) {
			var limit = get(this, 'limit');
			var offset = get(this, 'offset');
			// no negative pages
			page = max(page - 1, 0);
			offset = (limit * page) || 0;
			set(this, 'offset', offset);
			return page + 1;
		}
	}),

	// 1-based
	pages: computed('content.length', 'limit', {
		get: function () {
			var limit = get(this, 'limit');
			var length = get(this, 'content.length');
			var pages = ceil(length / limit) || 1;
			if (pages === Infinity) {
				pages = 0;
			}
			return pages;
		}
	}),

	isFirstPage: equal('page', 0),

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
					content: get(this, prop),
					page: (page || 0),
					limit: limit
				});
			}
		});
	}
};

export default ArrayPager;
