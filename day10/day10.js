const dir = {
  "|" : [0, 1]  , // north-south
  "-" : [1, 0]  , // east-west 
  "L" : [1, 1]  , // north-east
  "J" : [-1, 1] , // north-west
  "7" : [-1, 1] , // south-west
  "F" : [1, -1] , // south-east
}


const partOne = (input) => {
  // find animal
  const s_pos = input.map((el, index) => {
    if (el.indexOf('S') >= 0) return [el.indexOf('S'), index]
  }).filter((el) => el)

  

}

readInputByLines("/day10/input.txt")
  .then((input) => {
    console.log(partOne(input))
    // console.log(partTwo(input));
  })