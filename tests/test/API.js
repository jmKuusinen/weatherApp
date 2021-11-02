
var expect  = require("chai").expect;
var request = require("request");

// Test API connection with functions to retrieve current weather or forecast

describe("Openweathermap API", function() {

   describe("fetch weather", function() {
    const endpoint = `${mapURI}/weather?q=${targetCity}&appid=${appId}&`;
    var url = endpoint;

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

   describe("fetch forecast", function() {
    const fr_endpoint = `${mapURI}/forecast?q=${targetCity}&appid=${appId}&`;
    var url = fr_endpoint;
    
    it("returns status 200", function(done) {
       request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
        })   
    });
});
});
});