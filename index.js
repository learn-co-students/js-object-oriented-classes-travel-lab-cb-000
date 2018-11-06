
class Driver{
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  }
}


class Route{
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    const eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    const horizontalStart = eastWest.indexOf(this.beginningLocation.horizontal);
    const horizontalEnd = eastWest.indexOf(this.endingLocation.horizontal);
    const verticalBlocksTravelled = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
    const horizontalBlocksTravelled = Math.abs(horizontalStart - horizontalEnd);
    return verticalBlocksTravelled + horizontalBlocksTravelled;
  }

  estimatedTime(peak = false) {
    if (peak) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }
}
