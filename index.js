// Code your solution in this file!
const hq = 42
const feet = 264

function distanceFromHqInBlocks(pickup) {

    return Math.abs(pickup - hq)
    
    // return (pickup > hq ? pickup - hq : hq - pickup)
}

function distanceFromHqInFeet(pickup) {

    return Math.abs(pickup - hq) * feet

}

function distanceTravelledInFeet(start, dropoff) {

    return Math.abs(start - dropoff) * feet

}

function calculatesFarePrice(start, dropoff) {

    var diffInFeet = distanceTravelledInFeet(start, dropoff)
    
    if (diffInFeet < 400) {
        return 0;
    } else if (diffInFeet> 400 && diffInFeet < 2000) {
        return (diffInFeet - 400) * .02;
    } else if (diffInFeet > 2000 && diffInFeet < 2500) {
        return 25;
    }
    else if (diffInFeet > 2500) {
        return 'cannot travel that far';
    }

}
