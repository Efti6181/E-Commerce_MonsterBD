/* DELIVERY SETTINGS — edit this file, then redeploy Netlify.
   Normal: freeDelivery:false, flatRate:null
   Free for everyone: freeDelivery:true
   Offer ৳50 for everyone: freeDelivery:false, flatRate:50
   Use numbers without quotes. Zero is a valid charge.
*/
var DELIVERY_CONFIG = {
  whatsappNumber: "8801601233212",
  freeDelivery: false,
  flatRate: null,
  chattogramRate: 80,
  otherDivisionsRate: 140
};
var BD_DIVISIONS = ["Barishal", "Chattogram", "Dhaka", "Khulna", "Mymensingh", "Rajshahi", "Rangpur", "Sylhet"];
function getDeliveryCharge(division, config) {
  var c = config || DELIVERY_CONFIG;
  if (BD_DIVISIONS.indexOf(division) === -1) throw new Error("Please select a division.");
  var rate = c.freeDelivery ? 0 : c.flatRate !== null ? c.flatRate : division === "Chattogram" ? c.chattogramRate : c.otherDivisionsRate;
  if (typeof rate !== "number" || !Number.isFinite(rate) || rate < 0) throw new Error("Delivery pricing is unavailable. Please contact us on WhatsApp.");
  return rate;
}
