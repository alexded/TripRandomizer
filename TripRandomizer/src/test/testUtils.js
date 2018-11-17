TestUtils = function() {
	
	var _assertPoints = function( point1, point2, expectedDistance ) {
	  let d = Math.sqrt(
	    Math.pow(point1.getLongitude() - point2.getLongitude(), 2) +
	      Math.pow(point1.getLatitude() - point2.getLatitude(), 2)
	  );
	  let assertionResult = Math.abs(d - expectedDistance) < 0.000001;
	  if (!assertionResult) {
	    throw new Error( "Points assertion error: " + point1.getName() + ", " + point2.getName() + " :: " + d + " = " + expectedDistance );
	  }
	};
	
	return {
		assertPoints:  _assertPoints
	}
	
}();