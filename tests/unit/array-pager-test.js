/* global QUnit */
import Em from 'ember';
import ArrayPager from 'array-pager';

QUnit.module('ArrayPager');

QUnit.test('constructor exists', function (assert) {
	assert.ok(ArrayPager, 'ArrayPager is not null or undefined');
	assert.equal(typeof ArrayPager, 'function', 'ArrayPager is function');
});
