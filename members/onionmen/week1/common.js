// http://stackoverflow.com/questions/1744310/how-to-fix-array-indexof-in-javascript-for-internet-explorer-browsers
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(obj, start) {
         for (var i = (start || 0), j = this.length; i < j; i++) {
             if (this[i] === obj) { return i; }
         }
         return -1;
    }
}

String.prototype.IsNullOrEmpty = function () {
    var arg = (arguments[0] === undefined) ? this.toString() : arguments[0];
    if (!arg) { return true; }
    else { 
        if (typeof (arg) !== "string") { throw "Property or Arguments was not 'String' Types"; }
        return false; 
    }
}

String.IsNullOrEmpty = function(value) {
	if (value === undefined) return true;
	return value.toString().IsNullOrEmpty();
}