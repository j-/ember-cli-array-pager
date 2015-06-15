import Em from 'ember';
import ArraySlice from 'array-slice';
var computed = Em.computed;
var get = Em.get;
var set = Em.set;

var ArrayPager = ArraySlice.extend({
	// 1-based
	page: computed('offset', 'limit', function (key, page) {
		var limit = get(this, 'limit');
		var offset;
		// default value
		if (arguments.length <= 1) {
			offset = get(this, 'offset') || 0;
			return Math.ceil(offset / limit) || 1;
		}
		// setter
		// no negative pages
		page = Math.max(page - 1, 0);
		offset = (limit * page) || 0;
		set(this, 'offset', offset);
		return page + 1;
	}),

	// 1-based
	pages: computed('content.length', 'limit', function () {
		var limit = get(this, 'limit');
		var length = get(this, 'content.length');
		var pages = Math.ceil(length / limit) || 1;
		if (pages === Infinity) {
			pages = 0;
		}
		return pages;
	})
});

ArrayPager.computed = {
	page: function (prop, page, limit) {
		return computed(function () {
			return ArrayPager.create({
				content: get(this, prop),
				page: page,
				limit: limit
			});
		});
	}
};

export default ArrayPager;
