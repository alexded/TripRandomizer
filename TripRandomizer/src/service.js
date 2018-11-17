var Service = function() {
	
	this.findIntersectionPoints = function( startPoint, endPoint, maxSpeed, betweenPointsNumber ) {
		
		var x0 = startPoint.getLongitude();
		var y0 = startPoint.getLatitude();
		var x1 = endPoint.getLongitude();
		var y1 = endPoint.getLatitude();
		// Distance between points( on the square )
		let d = Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2));
		// Max first interval
		var r0 = maxSpeed;
		// Max rest interval
		var r1 = betweenPointsNumber * r0;
		
		if( d > r0 + r1 ) {
			return {
		    	point1: null,
		    	point2: null
		    }
		}
		
	    var a = (Math.pow(r0, 2) - Math.pow(r1, 2) + Math.pow(d, 2)) / (2 * d);
	    var h = Math.sqrt(Math.pow(r0, 2) - Math.pow(a, 2));

	    // First distance point
	    var x2 = x0 + (a * (x1 - x0)) / d;
	    var y2 = y0 + (a * (y1 - y0)) / d;
	    let point2 = new Point("Point2", y2, x2);

	    var x31 = x2 - (h * (y1 - y0)) / d;
	    var y31 = y2 + (h * (x1 - x0)) / d;
	    let point31 = new Point("Point31", y31, x31);
	    console.log( point31.toString() );

	    var x32 = x2 + (h * (y1 - y0)) / d;
	    var y32 = y2 - (h * (x1 - x0)) / d;
	    let point32 = new Point("Point32", y32, x32);
	    console.log( point32.toString() );
	    
	    return {
	    	point1: point31,
	    	point2: point32
	    }
	    
	}  
	
}