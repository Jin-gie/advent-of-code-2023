// Star 1 answer: 2563
// Star 2 answer : 70768

const max_colors = {
  "red" : 12,
  "green" : 13,
  "blue" : 14
}

const partOne = (input) => {
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
}

const partTwo = (input) => {
  const colors = ['red', 'green', 'blue'];
  
  console.log(
  input.map((game) => {
    tirages = game.split(':')[1].split(/,|;/);

    return (
      colors.map((color) => {
        const color_tirages = tirages
          .filter((tir) => {
            return tir.includes(color);
          })
          .map((el) => {return (Number(el.trim().split(' ')[0]))})
          
        return Math.max(...color_tirages)
      }).reduce((a,b) => {return a*b})
    )
    
  }).reduce((a,b) => { return a+b})
  )
}


readInputByLines("/day2/input.txt")
  .then((input) => {
    partTwo(input)
  })