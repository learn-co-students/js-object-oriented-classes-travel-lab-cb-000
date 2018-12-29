class Driver {
    constructor(name, startDate) {
        this.name = name;
        this.startDate = new Date(startDate);
    }

    yearsExperienceFromBeginningOf(yearString) {
        const year = new Date(yearString, 0, 1);
        return year.getFullYear() - this.startDate.getFullYear();
    }
}

const eastWest = [
    '1st Avenue',
    '2nd Avenue',
    '3rd Avenue',
    'Lexington Avenue',
    'Park',
    'Madison Avenue',
    '5th Avenue'
  ];

class Route {
    constructor(beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation;
    }

    blocksTravelled() {
        const horizontal = Math.abs(eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal));
        const vertical = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical);
        return horizontal + vertical;
    }

    estimatedTime(peak = false) {
        const blocksPerMinute = peak ? 2 : 3;
        return this.blocksTravelled() / blocksPerMinute;
    }
}