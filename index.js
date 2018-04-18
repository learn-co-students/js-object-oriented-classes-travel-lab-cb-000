const horizontalBlocks = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor(name, startDate) {
    this.name = name,
    this.startDate = new Date(startDate)
  }
  yearsExperienceFromBeginningOf(endDate){
    return endDate - this.startDate.getFullYear()
  }
}

class Route {
  constructor(begin, end) {
    this.beginningLocation = begin,
    this.endingLocation = end
  }

  blocksTravelled() {
    let verticalDistance = Math.abs(parseInt(this.beginningLocation.vertical) - parseInt(this.endingLocation.vertical))
    let horizontalDistance = Math.abs(parseInt(horizontalBlocks.indexOf(this.beginningLocation.horizontal)) - parseInt(horizontalBlocks.indexOf(this.endingLocation.horizontal)) )
    return verticalDistance + horizontalDistance
  }

  estimatedTime(peak) {
    let blocksPerMinute = 0
    if(peak){
      blocksPerMinute = 2
    } else {
      blocksPerMinute = 3
    }
    let blocks = this.blocksTravelled()
    return parseInt(blocks/blocksPerMinute)
  }
}
