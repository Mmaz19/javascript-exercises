const ftoc = function(far) {
  return Math.round((far-32)*0.556);
};

const ctof = function(cel) {
  return Math.round((cel*1,8)+ 32);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

//[°F] = [°C] × 9⁄5 + 32	[°C] = ([°F] − 32) × 5⁄9