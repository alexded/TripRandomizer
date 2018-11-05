var Utils = function() {

	this._convertCoordinatesToKm = function(point) {
	  let longitudeDegree = point.getLongitude();
	  let latitudeDegree = point.getLatitude();
	  let getLongitudeKm = function() {
	    if (latitudeDegree <= 45) {
	      return (
	        LONGITUDE_KM_0 -
	        latitudeDegree * ((LONGITUDE_KM_0 - LONGITUDE_KM_45) / 45)
	      );
	    } else {
	      return LONGITUDE_KM_45 - (latitudeDegree - 45) * (LONGITUDE_KM_45 / 45);
	    }
	  };
	  return new Point(
	    point.getName(),
	    latitudeDegree * LATITUDE_KM,
	    longitudeDegree * getLongitudeKm()
	  );
	};
	
	this._getDistance = function( startPoint, endPoint ) {
		  const PI = Math.PI;
		  const PI180 = PI / 180;
		  var startPointLongitudePI = startPoint.getLongitude() * PI180;
		  var endPointLongitudePI = endPoint.getLongitude() * PI180;
		  var startPointLatitudePI = startPoint.getLatitude() * PI180;
		  var endPointLatitudePI = endPoint.getLatitude() * PI180;
		  var pointsDistance =
		    2 *
		    6371 *
		    Math.asin(
		      Math.sqrt(
		        Math.pow(Math.sin((startPointLatitudePI - endPointLatitudePI) / 2), 2) +
		          Math.cos(startPointLatitudePI) *
		            Math.cos(endPointLatitudePI) *
		            Math.pow(
		              Math.sin((startPointLongitudePI - endPointLongitudePI) / 2),
		              2
		            )
		      )
		    ).toFixed(6);
		  return pointsDistance;
		}
	
	return {
		convertCoordinatesToKm: _convertCoordinatesToKm,
		getDistance: _getDistance
	}
}();