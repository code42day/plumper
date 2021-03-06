var outline = require('./outline');
var grid = require('./grid');
var math = require('./math');

module.exports = plumper;


function addFat(p, fat) {
  return [-1, 1].map(function(d) {
    return math.offset(p, [fat, fat], d);
  });
}

function plumper(polyline, fat, optimize) {
  if (!polyline || !polyline.length) {
    return;
  }
  if (polyline.length == 1) {
    return [addFat(polyline[0], fat)];
  }

  if (typeof optimize === 'undefined') {
    optimize = true;
  }

  var oae = math.boxToOriginAndExtent(outline(polyline), fat);
  var scale = math.scale(oae.origin, fat);
  var g = grid(oae.extent);
  var boxes = g.fatten(scale.toGridArray(polyline), optimize);
  return boxes.map(function(box) {
    return [
      scale.toReal(box[0]),
      scale.toReal(math.move(box[1], [1, 1]))
    ] ;
  });
}
