// can create a Driver with a name and startDate
// sets the driver startDate as a date object
class Driver {
  constructor (name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  // calculates the number of years driven given an endDate
  yearsExperienceFromBeginningOf(endYear) {
    let startYear = this.startDate.toISOString().slice(0,4);
    // console.log(parseInt(endYear - startYear));
    return parseInt(endYear - startYear);
  }

}


// To calculate the distance of avenues travelled, you will need to know the names and order of avenues in New York City.
// You can use the following array to help with your calculation:
let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

// a route is initialized with two arguments, a beginningLocation and an endingLocation
class Route {
  constructor (beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  // calculates the number of blocksTravelled
  // calculates the number of horizontal blocks travelled
  // combines horizontal and vertical blocks travelled

  avenueToInteger(avenue){
    return eastWest.indexOf(avenue);
  }

  blocksTravelled(){
    let horizontalDistance = this.avenueToInteger(this.endingLocation.horizontal) - this.avenueToInteger(this.beginningLocation.horizontal);
    let verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical;
    return (Math.abs(horizontalDistance) + Math.abs(verticalDistance));
  }

  estimatedTime(peak){
    if(peak){
      return this.blocksTravelled()/2;
    } else {
      return this.blocksTravelled()/3;
    }
  }
}
