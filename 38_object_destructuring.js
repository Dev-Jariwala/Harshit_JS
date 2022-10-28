// Object Destructuring

const band = {
  bandName: "Led Zeppielin",
  famousSong: "Stair to heaven",
  year: 1968,
  anotherSong: "Kashmir"
}

// what if we want to store key values in variables
  // const var1 = band.bandName;
  // const var2 = band.famousSong;
  // console.log(var1, var2);

// Instead of doing what we have done above
// We can use Object Destructuring.
  const {bandName,famousSong:song, ...restKeys} = band;
  console.log(bandName,song);
  console.log(restKeys);
