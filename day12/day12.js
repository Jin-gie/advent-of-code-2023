const partOne = (input) => {
  return input.map((el) => el.split(' ')).map((el) => {
    console.log(el);
  })
}


readInputByLines("/day12/input.txt")
  .then((input) => {
    console.log(partOne(input))
    // console.log(partTwo(input));
  })