var Tests = {};
Tests.Service = {};
Tests.Service.intersectionPoints = {};

Tests.Service.intersectionPoints.twoPoints = function() {
	
	var service = new Service();
	
	var assertPoints = TestUtils.assertPoints;
	
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
	
};

Tests.Service.intersectionPoints.twoPoints();

Tests.Service.intersectionPoints.onePoint = function() {
	
	var service = new Service();
	
	var assertPoints = TestUtils.assertPoints;
	
	var startPoint;
	var endPoint;
	
	startPoint = new Point("Start point", 0, 10 );
	endPoint = new Point("End point", 0, 110);
	test( startPoint, endPoint );
	
	startPoint = new Point("Start point", 10, 10 );
	endPoint = new Point("End point", 80.71067811865475, 80.71067811865475);
	test( startPoint, endPoint );
	
	startPoint = new Point("Start point", -10, 0 );
	endPoint = new Point("End point", -110, 0);
	test( startPoint, endPoint );
	
	startPoint = new Point("Start point", -10, 10 );
	endPoint = new Point("End point", -80.71067811865475, 80.71067811865475);
	test( startPoint, endPoint );
	
	startPoint = new Point("Start point", 0, -10 );
	endPoint = new Point("End point", 0, -110);
	test( startPoint, endPoint );
	
	startPoint = new Point("Start point", -10, -10 );
	endPoint = new Point("End point", -80.71067811865475, -80.71067811865475);
	test( startPoint, endPoint );
	
	startPoint = new Point("Start point", 10, 0 );
	endPoint = new Point("End point", 110, 0);
	test( startPoint, endPoint );
	
	startPoint = new Point("Start point", 10, -10 );
	endPoint = new Point("End point", 80.71067811865475, -80.71067811865475);
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
	    assertPoints( point31, point32, 0 );
	    
	    console.log( "OK" );
	    
	}
	
};

Tests.Service.intersectionPoints.onePoint();