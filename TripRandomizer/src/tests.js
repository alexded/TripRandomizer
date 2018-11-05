var Tests = function() {
	
	var service = new Service();
	
	var assertPoints = function( point1, point2, expectedDistance ) {
	  let d = Math.sqrt(
	    Math.pow(point1.getLongitude() - point2.getLongitude(), 2) +
	      Math.pow(point1.getLatitude() - point2.getLatitude(), 2)
	  );
	  let assertionResult = Math.abs(d - expectedDistance) < 0.000001;
	  if (!assertionResult) {
	    throw new Error( "Points assertion error: " + point1.getName() + ", " + point2.getName() + " :: " + d + " = " + expectedDistance );
	  }
	};
	
	var startPoint;
	var endPoint;
	
	startPoint = new Point("Start point", 0, 10 );
	endPoint = new Point("End point", 0, 90);
	test( startPoint, endPoint );
	
	startPoint = new Point("Start point", 10, 10 );
	endPoint = new Point("End point", 66.67, 66.67);
	test( startPoint, endPoint );
	
	startPoint = new Point("Start point", 10, 0 );
	endPoint = new Point("End point", 90, 0);
	test( startPoint, endPoint );
	
	startPoint = new Point("Start point", 10, -10 );
	endPoint = new Point("End point", 66.67, -66.67);
	test( startPoint, endPoint );
	
	startPoint = new Point("Start point", 0, -10 );
	endPoint = new Point("End point", 0, -90);
	test( startPoint, endPoint );
	
	startPoint = new Point("Start point", -10, -10 );
	endPoint = new Point("End point", -66.67, -66.67);
	test( startPoint, endPoint );
	
	startPoint = new Point("Start point", -10, 0 );
	endPoint = new Point("End point", -90, 0);
	test( startPoint, endPoint );
	
	startPoint = new Point("Start point", -10, 10 );
	endPoint = new Point("End point", -66.67, 66.67);
	test( startPoint, endPoint );

	function test( startPoint, endPoint ) {
		
		console.log(startPoint.toString());
		console.log(endPoint.toString());
		var betweenPointsNumber = 1;
		var maxSpeed = 50;
		var intersectionPoints = service.findIntersectionPoints( startPoint, endPoint, maxSpeed, betweenPointsNumber );
		
		var point31 = intersectionPoints.point1;
		var point32 = intersectionPoints.point2;
	    assertPoints( point31, startPoint, maxSpeed );
	    assertPoints( point31, endPoint, maxSpeed );
	    assertPoints( point32, startPoint, maxSpeed );
	    assertPoints( point32, endPoint, maxSpeed );
	    
	    console.log( "OK" );
	    
	}
	
}();