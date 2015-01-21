# ember-cli-array-pager

Ember CLI array pager addon.

`ember-cli-array-pager` exposes an [Ember][ember] [ArrayProxy][proxy] subclass which proxies a slice
of a given content array. Its values will update when the original array is modified. Useful for
creating pagination components. Extends [`ember-cli-array-slice`][slice];

## Example

```js
import ArrayPager from 'array-pager';

var paged = ArrayPager.create({
	content: [3, 1, 4, 1, 5, 9],
	limit: 3
});

console.log(paged.toArray()); // [3, 1, 4];
paged.incrementPage();
console.log(paged.toArray()); // [1, 5, 9];
```

## Properties

**`content`**: Ember.Array (optional, default = `[]`)

The content array. Must be an object that implements `Ember.Array` and/or `Ember.MutableArray`.
See [`Ember.ArrayProxy#content`][content].

**`offset`**: Number (optional, default = `0`)

Index where pager begins.

**`limit`**: Number (optional, default = `Infinity`)

Maximum number of elements to hold in the array. By default, holds all elements after `offset`.

## Methods

**`incrementPage([pages = 1])`**: `this`

Increase the current offset by a number of pages. When not given any arguments this will advance by
a single page.

**`decrementPage([pages = 1])`**: `this`

Decrease the current offset by a number of pages. When not given any arguments this will regress by
a single page.

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

[ember]: http://emberjs.com/
[proxy]: http://emberjs.com/api/classes/Ember.ArrayProxy.html
[slice]: https://github.com/j-/ember-cli-array-slice
[content]: http://emberjs.com/api/classes/Ember.ArrayProxy.html#property_content
[npm]: https://www.npmjs.com/
[cli]: http://www.ember-cli.com/
