function distanceFromHqInBlocks(someValue) {
const hqLocation = 42;
return Math.abs(someValue - hqLocation);

  }

  function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    return blocks * 264;
  }
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination-start) * 264;
  }
  function calculatesFarePrice(start,destination){
    const distance = distanceTravelledInFeet(start, destination);

    if(distance > 2500){
        return`cannot travel that far`;

    }else if (distance > 2000) {
        return 25;
    }else if (distance > 400) {
        return (distance - 400) * 0.02;
    }else {
return 0;
    }


  }
  console.log(distanceFromHqInBlocks(50));
  console.log(distanceFromHqInBlocks(34));
  console.log(distanceFromHqInFeet(50));
  console.log(distanceFromHqInFeet(34));
  console.log(distanceFromHqInFeet(34, 38));
  console.log(distanceFromHqInFeet(50, 42));
  console.log(calculatesFarePrice(34, 38));
  console.log(calculatesFarePrice(50, 42));
  console.log(calculatesFarePrice(10, 100));
