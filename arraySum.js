var myArray = [2, 4, 5, 6, 7];
var arraySum = function(myArray) {

    var sum = myArray.reduce(add, 0);

    function add(a, b) {
        return a + b;

    }
    return sum;
};

arraySum(myArray);
