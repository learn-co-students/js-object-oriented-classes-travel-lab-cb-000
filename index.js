class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf (year) {
    return parseInt(year, 10) - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
    this.vertical = Math.abs(beginningLocation.vertical - endingLocation.vertical);
    this.horizontal = Math.abs(eastWest.indexOf(beginningLocation.horizontal) - eastWest.indexOf(endingLocation.horizontal));
  }

  blocksTravelled () {
    return this.blocksTravelled = this.vertical + this.horizontal;
  }

  estimatedTime (peakBool) {
    if (peakBool) {
      return this.blocksTravelled() / 2;
    }
    else {
      return this.blocksTravelled() / 3;
    }
  }

}

let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];
