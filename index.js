let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(date) {
    return date - this.startDate.getFullYear();
  }
}

class Route {
  constructor(startingLocation, endingLocation) {
    this.startingLocation = {horizontal: startingLocation.horizontal, vertical: startingLocation.vertical};
    this.endingLocation = {horizontal: endingLocation.horizontal, vertical: endingLocation.vertical};;
  }

  blocksTravelled() {
    let streets = Math.abs(this.endingLocation.vertical - this.startingLocation.vertical);
    let avenues = Math.abs(eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.startingLocation.horizontal));
    return streets + avenues;
  }

  estimatedTime(peakHours) {
    return peakHours ? (this.blocksTravelled() / 2) : (this.blocksTravelled() / 3);
  }
}
