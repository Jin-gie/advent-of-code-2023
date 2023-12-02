const digit_map = {
  "one" : "1",
  "two" : "2",
  "three" : "3",
  "four" : "4",
  "five" : "5",
  "six" : "6",
  "seven" : "7",
  "eight" : "8",
  "nine" : "9"
}


readInputByLines("/day1/input.txt")
  .then((input) => {

    let new_input = input.map((line) => {
      const nbs = line.match(/(one|two|three|four|five|six|seven|eight|nine|\d)/gi)
                      .toString()
                      .split(',')
                      .map((el) => {
                        if (digit_map[el]) return digit_map[el]
                        else return el
                      });
      console.log(nbs + " : " + nbs[0] + " + " + nbs[nbs.length - 1] + " = " + nbs[0] + nbs[nbs.length - 1])
      
      return Number(nbs[0] + nbs[nbs.length - 1])
    })
    .reduce((a,b) => {return a + b})

    console.log(new_input)
  })



// readInputByLines("/day1/input1.txt")
//   .then((input) => {

//     // Extract numbers with regex
//     let new_input = input.map((line) => {
//       const nbs = line.match(/\d+/g).toString().split('');
//       console.log(nbs)
//       return nbs.length > 1 ? Number(nbs[0] + nbs[nbs.length - 1]) : Number(nbs[0] + nbs[0])
//     })
//     .reduce((a,b) => {return a + b})

//     console.log(new_input)
//   })