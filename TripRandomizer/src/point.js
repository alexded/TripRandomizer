var Point = function(name, latitude, longitude) {
  this.getName = function() {
    return name;
  };
  this.getLongitude = function() {
    return longitude;
  };
  this.getLatitude = function() {
    return latitude;
  };
  this.toString = function() {
    return name + ": ( " + latitude + ", " + longitude + " )";
  };
  this.toGoogle = function() {
    return latitude + "," + longitude + "/";
  };
};