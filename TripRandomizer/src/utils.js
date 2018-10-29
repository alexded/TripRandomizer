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
	
	return {
		convertCoordinatesToKm: _convertCoordinatesToKm
	}
}();