
class Driver {
  constructor (name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    let untilDate = new Date(year, 0, 1).getFullYear();
    let fromDate = this.startDate.getFullYear();
    return untilDate - fromDate;
  }
}

class Route {
  constructor (beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  blocksTravelled () {
    let verticalBlocks = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
    let horizontalBlocks = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal))
    return verticalBlocks + horizontalBlocks;
  }
  estimatedTime (peak) {
    if (peak == true) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    };
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