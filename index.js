
class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year){
    const endDate = new Date (year, 1, 1);
    const dateSubtraction = endDate - this.startDate;
    let differenceDate = dateSubtraction / (365 * 24 * 60 * 60 *1000);
    return parseInt(differenceDate);
  };
}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this. endingLocation = endingLocation;
  }
  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    let verticalTraveled = this.beginningLocation.vertical - this.endingLocation.vertical;
    let horizontalTraveled = eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal);
    let totalTraveled = Math.abs(verticalTraveled) + Math.abs(horizontalTraveled);
    return totalTraveled;
  }
  estimatedTime(time){
    let min;
    let distance = this.blocksTravelled();
    time ? (min = distance / 2) : (min = distance / 3);
    return min;
  }
}
