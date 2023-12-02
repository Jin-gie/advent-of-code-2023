// Star 1 answer: 2563

const max_colors = {
  "red" : 12,
  "green" : 13,
  "blue" : 14
}

readInputByLines("/day2/input.txt")
  .then((input) => {
    console.log(

      input
        .filter((game) => {
          const hands = game.split(':')[1].split(';');

          return(!hands.map((hand) => {
            return(
              hand.split(',').map((tirage) => {
                const el = tirage.trim().split(' ')
                // si valeur max >= valeur tirée => return true
                // si valeur max < valeur tirée => return false
                return (Number(max_colors[el[1]]) >= Number(el[0]))
              }).includes(false)
            )

          }).includes(true))
        })
        .map((valid) => {return Number(valid.split(':')[0].trim().split(' ')[1])})
        .reduce((a,b) =>{return a+b})

    )

  })