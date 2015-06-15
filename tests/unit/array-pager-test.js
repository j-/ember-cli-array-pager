/* global QUnit */
import Em from 'ember';
import ArrayPager from 'array-pager';

QUnit.module('ArrayPager');

QUnit.test('constructor exists', function (assert) {
	assert.ok(ArrayPager, 'ArrayPager is not null or undefined');
	assert.equal(typeof ArrayPager, 'function', 'ArrayPager is function');
});

QUnit.test('content is initialized', function (assert) {
	var arr = Em.A(['a', 'b', 'c']);
	var slice = ArrayPager.create({
		content: arr
	});
	assert.equal(slice.get('arrangedContent.length'), 3);
	assert.equal(slice.get('content.length'), 3);
	assert.equal(slice.get('length'), 3);
	assert.deepEqual(slice.toArray(), ['a', 'b', 'c']);
});
