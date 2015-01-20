import ArraySlice from 'array-slice/array-slice';

var ArrayPager = ArraySlice.extend({
	incrementPage: function (pages) {
		var limit = this.get('limit');
		if (pages == null) {
			pages = 1;
		}
		limit *= pages;
		return this.incrementProperty('offset', limit);
	},
	decrementPage: function (pages) {
		if (pages == null) {
			pages = 1;
		}
		pages *= -1;
		return this.incrementPage(pages);
	}
});

export default ArrayPager;
