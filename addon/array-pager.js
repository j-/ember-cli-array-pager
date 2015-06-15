import Em from 'ember';
import ArraySlice from 'array-slice';
var computed = Em.computed;
var get = Em.get;
var set = Em.set;

var ArrayPager = ArraySlice.extend({
	// 1-based
	page: computed('offset', 'limit', {
		get: function () {
			var limit = get(this, 'limit');
			var offset = get(this, 'offset') || 0;
			return Math.ceil(offset / limit) || 1;
		},
		set: function (key, page) {
			var limit = get(this, 'limit');
			var offset = get(this, 'offset');
			// no negative pages
			page = Math.max(page - 1, 0);
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
			var pages = Math.ceil(length / limit) || 1;
			if (pages === Infinity) {
				pages = 0;
			}
			return pages;
		}
	})
});

ArrayPager.computed = {
	page: function (prop, page, limit) {
		return computed({
			get: function () {
				return ArrayPager.create({
					content: get(this, prop),
					page: page,
					limit: limit
				});
			}
		});
	}
};

export default ArrayPager;
