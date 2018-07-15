let eastWest =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor(name, date) {
    this.name = name;
    this.startDate =  new Date(date);
  }

  yearsExperienceFromBeginningOf(endYear) {
    const endDate = new Date(endYear, 1, 1);
    const years = (endDate - this.startDate)/1000/60/60/24/365; //ms to year
    return parseInt(years) + 1;
  }
}


class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  avenueToInt(ave) {
    return eastWest.indexOf(ave)
  }

  blocksTravelled() {
    const horizontal = this.avenueToInt(this.endingLocation.horizontal) - this.avenueToInt(this.beginningLocation.horizontal);
    const vertical = parseInt(this.endingLocation.vertical) - parseInt(this.beginningLocation.vertical);
    const horizontalAbs = ((horizontal >= 0) ? horizontal : horizontal - 2 * horizontal);
    const verticalAbs = ((vertical >= 0) ? vertical : vertical - 2 * vertical);
    return horizontalAbs + verticalAbs;
  }

  estimatedTime(peak=false) {
    if (peak == true) {
      return this.blocksTravelled() / 2
    } else if (peak == false) {
      return this.blocksTravelled() / 3
    }
  }
}
//   estimatedTime(peak){
//   if(peak){
//     return this.blocksTravelled()/2
//   } else {
//     return this.blocksTravelled()/3
//   }
// }
// }
