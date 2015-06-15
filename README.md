# ember-cli-array-pager

[![master branch build status][build-icon]][build-link]

Ember CLI array pager addon.

`ember-cli-array-pager` exposes an [Ember][ember] [ArrayProxy][proxy] subclass
which divides a content array into pages. Useful for creating pagination
components. Extends [`j-/ember-cli-array-slice`][slice].

## Example

```js
import ArrayPager from 'array-pager';

var paged = ArrayPager.create({
	content: [1, 2, 3, 4, 5, 6],
	limit: 3
});

console.log(paged.toArray()); // [1, 2, 3];
paged.incrementProperty('page');
console.log(paged.toArray()); // [4, 5, 6];
```

## Properties

**`content`**: Ember.Array (optional, default = `[]`)

The content array. Must be an object that implements `Ember.Array` and/or
`Ember.MutableArray`.
See [`Ember.ArrayProxy#content`][content].

**`page`**: Number (optional, default = `1`)

1-based index of current page. Gets and sets the underlying `offset` property.

**`pages`**: Number (readonly)

1-based count of total pages available based on content length and `limit`.

**`limit`**: Number (optional, default = `Infinity`)

Maximum number of elements to hold in a single page. By default, holds all
elements after `offset`.

## Installing

With [npm][npm]:

```sh
$ npm install --save ember-cli-array-pager
```

Or with [Ember CLI][cli]:

```sh
$ ember install:npm ember-cli-array-pager
```

## License

[MIT license](LICENSE.md).

[build-icon]: https://travis-ci.org/j-/ember-cli-array-pager.svg?branch=master
[build-link]: https://travis-ci.org/j-/ember-cli-array-pager
[ember]: http://emberjs.com/
[proxy]: http://emberjs.com/api/classes/Ember.ArrayProxy.html
[slice]: https://github.com/j-/ember-cli-array-slice
[content]: http://emberjs.com/api/classes/Ember.ArrayProxy.html#property_content
[npm]: https://www.npmjs.com/
[cli]: http://www.ember-cli.com/
