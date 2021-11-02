var expect  = require("chai").expect;
var request = require("request");

// Test API connection with geolocation to retrieve browser location

describe("Geolocation API", function() {

   describe("get browser location", function() {
    const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid==${appId}&`;
    var url = endpoint;

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
   });
});