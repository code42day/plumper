[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][gemnasium-image]][gemnasium-url]

# plumper

Makes your polyline look fat using routeboxer algorithm.

Check out [the live demo][demo].

## Installation

  Install with [npm]:

    $ npm install plumper

## API

```javascript
// polyline is a set of points
var polyline = [[0,2], [3,4], [7,8]];
// fat is a factor corresponding to the width of the polyline
var fat = 5;
// polygon is an array of points outlining a polygon that completely encompasses a line
var polygon = plumper(polyline, fat);


// if you're OK with slighly larger number of polygons, but you care about speed
var polygon = plumper(polyline, fat, false);
```


# License

The MIT License (MIT)

Copyright (c) 2013 [Damian Krzeminski](https://pirxpilot.me)

[routeboxer]: http://google-maps-utility-library-v3.googlecode.com/svn/trunk/routeboxer/docs/examples.html
[demo]: http://pirxpilot.github.io/plumper/

[npm]: https://www.npmjs.org/

[npm-image]: https://img.shields.io/npm/v/plumper.svg
[npm-url]: https://npmjs.org/package/plumper

[travis-url]: https://travis-ci.org/pirxpilot/plumper
[travis-image]: https://img.shields.io/travis/pirxpilot/plumper.svg

[gemnasium-image]: https://img.shields.io/gemnasium/pirxpilot/plumper.svg
[gemnasium-url]: https://gemnasium.com/pirxpilot/plumper
