document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;

const LONGITUDE_KM_45 = 79;
const LONGITUDE_KM_0 = 111;
const LATITUDE_KM = 111;



var getNextTripPoint = function(
  startPoint,
  endPoint,
  betweenPointsNumber,
  maxSpeed
) {
  console.log("-----");
  console.log(startPoint.toString());
  console.log(endPoint.toString());
  // circles intersection
  var x0 = startPoint.getLongitude();
  var y0 = startPoint.getLatitude();
  // Second point
  var x1 = endPoint.getLongitude();
  var y1 = endPoint.getLatitude();
  // Distance between points
  let d = Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2));
  // Max first interval
  var r0 = (maxSpeed * d) / distance;
  // Max rest interval
  var r1 = betweenPointsNumber * r0;

  if (d > r0 + r1) {
    return null;
  }

  var nextPoint_alg2;
  if (d < Math.abs(r0 - r1)) {
    console.log("Select any point for r0!");
    var x_rand_max = x0 + r0;
    var x_rand_min = x0 - r0;
    var x_nextPoint_alg2 =
      x_rand_min + (x_rand_max - x_rand_min) * Math.random();
    var y_rand_min = y0 - r0;
    var y_rand_max = y0 + r0;
    var y_nextPoint_alg2 =
      y_rand_min + Math.abs((y_rand_max - y_rand_min) * Math.random());
    nextPoint_alg2 = new Point(
      "NEXT POINT " + betweenPointsNumber,
      y_nextPoint_alg2,
      x_nextPoint_alg2
    );
  } else {
	  
    // Option 1
    var p = (r0 + r1 + d) / 2;
    var h1 = (2 / d) * Math.sqrt(p * (p - r0) * (p - r1) * (p - d));
    var a1 = Math.sqrt(Math.pow(r0, 2) - Math.pow(h1, 2));

    // Option 2
    var a = (Math.pow(r0, 2) - Math.pow(r1, 2) + Math.pow(d, 2)) / (2 * d);
    var h = Math.sqrt(Math.pow(r0, 2) - Math.pow(a, 2));

    // First distance point
    var x2 = x0 + (a * (x1 - x0)) / d;
    var y2 = y0 + (a * (y1 - y0)) / d;
    let point2 = new Point("Point2", y2, x2);

    var x31 = x2 - (h * (y1 - y0)) / d;
    var y31 = y2 + (h * (x1 - x0)) / d;
    let point31 = new Point("Point31", y31, x31);
    assertPoints(point31, point2, h);
    assertPoints(point31, startPoint, r0);
    assertPoints(point31, endPoint, r1);

    var x32 = x2 + (h * (y1 - y0)) / d;
    var y32 = y2 - (h * (x1 - x0)) / d;
    let point32 = new Point("Point32", y32, x32);
    assertPoints(point32, point2, h);
    assertPoints(point32, startPoint, r0);
    assertPoints(point32, endPoint, r1);

    var x3_min = x31 > x32 ? x32 : x31;
    var x3_max = x31 > x32 ? x31 : x32;
    var y3_min = y31 > y32 ? y32 : y31;
    var y3_max = y31 > y32 ? y31 : y32;

    // Algorithm 2
    var x_rand_max = y0 > y3_min && y0 < y3_max ? x3_max : x0 + r0;
    var x_rand_min = y1 > y3_min && y1 < y3_max ? x3_min : x1 - r1;
    var x_nextPoint_alg2 =
      x_rand_min + (x_rand_max - x_rand_min) * Math.random();
    var y_delta_r0 = Math.sqrt(
      Math.pow(x31 - x0, 2) +
        Math.pow(y31 - y0, 2) -
        Math.pow(x_nextPoint_alg2 - x0, 2)
    );
    var y_rand_r0_max = y0 + y_delta_r0;
    var y_rand_r0_min = y0 - y_delta_r0;

    var y_delta_r1 = Math.sqrt(
      Math.pow(x31 - x1, 2) +
        Math.pow(y31 - y1, 2) -
        Math.pow(x_nextPoint_alg2 - x1, 2)
    );
    var y_rand_r1_max = y1 + y_delta_r1;
    var y_rand_r1_min = y1 - y_delta_r1;

    var y_rand_min =
      y_rand_r0_min > y_rand_r1_min ? y_rand_r0_min : y_rand_r1_min;
    var y_rand_max =
      y_rand_r0_max > y_rand_r1_max ? y_rand_r1_max : y_rand_r0_max;

    var y_nextPoint_alg2 =
      y_rand_min + Math.abs((y_rand_max - y_rand_min) * Math.random());
    nextPoint_alg2 = new Point(
      "NEXT POINT " + betweenPointsNumber,
      y_nextPoint_alg2,
      x_nextPoint_alg2
    );
  }

  console.log(nextPoint_alg2.toString());
  var distance1 = Utils.getDistance(startPoint, nextPoint_alg2);
  var distance2 = Utils.getDistance(endPoint, nextPoint_alg2);
  console.log(
    toFixed(distance1) +
      " + " +
      toFixed(distance2) +
      " = " +
      toFixed(distance1 + distance2)
  );

  // Algorithm 1
  // var y_nextPoint = Math.abs((y3_max - y3_min) * Math.random()) + y3_min;
  // var h_rand = y_nextPoint - y2;
  // var d_for_max = Math.sqrt(Math.pow(r0, 2) - Math.pow(h_rand, 2));
  // var x_for_max = x0 + (d_for_max * (x1 - x0)) / d;
  // var x_max = x_for_max - (h_rand * (y1 - y0)) / d;

  // var d_for_min = Math.sqrt(Math.pow(r1, 2) - Math.pow(h_rand, 2));
  // var x_for_min = x0 + ((d - d_for_min) * (x1 - x0)) / d;
  // var x_min = x_for_min - (h_rand * (y1 - y0)) / d;
  // console.log("X INTERVAL 1: " + toFixed(x_min) + " ... " + toFixed(x_max));

  // var x_nextPoint = x_min + Math.abs((x_max - x_min) * Math.random());
  // var nextPoint = new Point("NEXT POINT ALGORITHM 1", y_nextPoint, x_nextPoint);
  // console.log(nextPoint.toString());
  // var distance_1 = getDistance(startPoint, nextPoint);
  // var distance_2 = getDistance(endPoint, nextPoint);
  // console.log(
  //   toFixed(distance_1) +
  //     " + " +
  //     toFixed(distance_2) +
  //     " = " +
  //     toFixed(distance_1 + distance_2)
  // );

  return nextPoint_alg2;
};

var toFixed = function(value) {
  return value.toFixed(3);
};

var assertPoints = function(point1, point2, expectedDistance) {
  let d = Math.sqrt(
    Math.pow(point1.getLongitude() - point2.getLongitude(), 2) +
      Math.pow(point1.getLatitude() - point2.getLatitude(), 2)
  );
  let assertionResult = Math.abs(d - expectedDistance) < 0.000001;
  if (!assertionResult) {
    throw new Error(
      "Points assertion error: " +
        point1.getName() +
        ", " +
        point2.getName() +
        " :: " +
        d +
        " = " +
        expectedDistance
    );
  }
};

function buildTripForGoogleMaps(points) {
  var urlString = "www.google.com.ua/maps/dir/";
  return points.reduce((l, point) => (l += point.toGoogle()), urlString);
}

var startPoint = new Point("Start point", 48.274375, 25.936225);
console.log(startPoint.toString());
var endPoint = new Point("End point", 48.530186, 25.051741);
console.log(endPoint.toString());
var distance = Utils.getDistance(startPoint, endPoint);
console.log( "Distance = ", distance );
var betweenPointsNumber = 7;
var maxSpeed = 40;
var points = [startPoint];
for (var index = betweenPointsNumber; index > 0; index--) {
  var nextPoint = getNextTripPoint(
    points[betweenPointsNumber - index],
    endPoint,
    index,
    maxSpeed
  );
  if (nextPoint) {
    points.push(nextPoint);
  } else {
    throw new Error("No points!");
  }
}
points.push(endPoint);

var googleMapsString = buildTripForGoogleMaps(points);
console.log(googleMapsString);
