var firstNameEp1 = "Andrew";
var firstNameEp2 = "Mike";
var firstNameEp3 = "Kate";

var lastNameEp1 = "Weilbacher";
var lastNameEp2 = "McDonald";
var lastNameEp3 = "Smith";

var addressEp1 = "Lakeland, FL";
var addressEp2 = "Chicago, IL";
var addressEp3 = "New York, NY";

var payRateEp1 = 50000.685;
var payRateEp2 = 25000.976;
var payRateEp3 = 60000.357;

var hireDateEp1 = new Date(2008, 4, 3);
var hireDateEp2 = new Date(2011, 3, 5);
var hireDateEp3 = new Date(2005, 20, 6);

payRateEp1.toFixed(1);
payRateEp2.toFixed(1);
payRateEp3.toFixed(1);

hireDateEp1.toLocaleDateString();
hireDateEp2.toLocaleDateString();
hireDateEp3.toLocaleDateString();

// testing for correct results
console.log(hireDateEp1.toLocaleDateString(), payRateEp1.toFixed(1));