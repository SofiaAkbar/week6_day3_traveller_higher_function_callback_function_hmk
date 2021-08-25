const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return startLocations = this.journeys.map((journey) => {
    return journey.startLocation;
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return endLocations = this.journeys.map((journey) => {
    return journey.endLocation;
  });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return journeys = this.journeys.filter((journey) => {
    return journey.transport === transport
  })
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return journeys = this.journeys.filter((journey) => {
    return journey.distance >= minDistance
  });
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return total = this.journeys.reduce((runningTotal, journey) => {
    return runningTotal + journey.distance
  }, 0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const modesOfTransport = this.journeys.map((journey) => {
    return journey.transport;
  });
  return [...new Set(modesOfTransport)];
};


module.exports = Traveller;
