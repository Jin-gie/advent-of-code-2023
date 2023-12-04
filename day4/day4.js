// Star 1 answer : 19855

const partOne = (input) => {

  console.log(
  input.map((card) => {
    const winning_numbers = card.split(':')[1].split('|')[0].trim().split(' ');
    const numbers = card.split(':')[1].split('|')[1].trim().split(' ');

    s = winning_numbers.filter((wn) => {
      if (numbers.indexOf(wn) >= 0) {
        return wn
      }
    }).length

    return (
      s > 0 ? Math.pow(2, (s-1)) : 0
    )
  }).reduce((a, b) => Number(a) + Number(b))
  )
} 

readInputByLines("/day4/input.txt")
  .then((input) => {
    partOne(input)
  })
