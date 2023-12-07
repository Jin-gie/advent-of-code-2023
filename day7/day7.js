// Result part one : 250453939

const c = "23456789TJQKA";

const calculateHandScore = (hand) => {
  let found_cards = []

  // find all different cards in hand
  hand.forEach((card) => {if (found_cards.indexOf(card) === -1) {found_cards.push(card)}})

  // for each different card, how many times is it found
  return(
    found_cards.map((card) => hand.filter(x => x === card).length).map((el) => el*el).reduce((a,b) => a+b)
  )
}

const partOne = (input) => {
  console.log(
    input
    .sort((a,b) => {
      const hand_a = a.split(' ')[0].split('')
      const hand_b = b.split(' ')[0].split('')
  
      const hand_a_score = calculateHandScore(hand_a)
      const hand_b_score = calculateHandScore(hand_b)

      console.log(hand_a, hand_b)
    
      if (hand_a_score < hand_b_score) return -1
      if (hand_b_score < hand_a_score) return 1;
  
      // case same hand type
      for (let i = 0; i < hand_a.length; i++) {
        if (c.indexOf(hand_a[i]) < c.indexOf(hand_b[i])) return -1
        if (c.indexOf(hand_a[i]) > c.indexOf(hand_b[i])) return 1
      }

      console.log(0)
      return 0
    })
    .map(((el, index) => Number(el.split(' ')[1])*(index+1)))
    .reduce((a,b) => a+b)
  )
}

readInputByLines("/day7/input.txt")
  .then((input) => {
    partOne(input)
  })
