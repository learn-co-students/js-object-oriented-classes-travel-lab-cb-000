class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year){
    let dateYear = new Date(`${year}`);
    let gap = parseInt((dateYear - this.startDate)/(365*24*60*60*1000));
    return gap;
  }
}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }


  blocksTravelled(){
    let eastWest = ['1st Avenue','2nd Avenue', '3rd Avenue','Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

    let vertical = this.endingLocation.vertical - this.beginningLocation.vertical;

    let horizontal = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal);

    return Math.abs(vertical) + Math.abs(horizontal);

  }

  estimatedTime(peakHours){
    let totalBlocks = this.blocksTravelled();
    let result = peakHours ? totalBlocks / 2 : totalBlocks / 3;
    return result
  }
}
