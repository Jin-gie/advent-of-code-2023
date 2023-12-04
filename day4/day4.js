// Star 1 answer : 19855
// Star 2 answer : 10378710

const getCardsWNS = (input) => {
  return(
  input.map((card) => {
    const winning_numbers = card.split(':')[1].split('|')[0].trim().split(' ');
    const numbers = card.split(':')[1].split('|')[1].trim().split(' ');

    return(
      winning_numbers.filter((wn) => {
        if (numbers.indexOf(wn) >= 0) return wn
      })
    )
  })
  )
}

const getCopies = (wns, card_nb, matching_nbs) => {
  let copies = []
  for (let i = card_nb+1; i < card_nb+1+matching_nbs.length; i++)
    if (i < wns.length) {
      copies.push(i)
      copies = copies.concat(getCopies(wns, i, wns[i]))
    }
  return copies
}

const partTwo = (input) => {
  // get winning number of each card and store it in array
  const wns = getCardsWNS(input)

  console.log(
    wns.map((card, index) => {
      return (getCopies(wns, index, card).push(index))
    }).reduce((a, b) => Number(a) + Number(b))
  )
  
}

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
    // partOne(input)
    partTwo(input)
  })
