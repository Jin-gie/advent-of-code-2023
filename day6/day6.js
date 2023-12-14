// part one: 345015

const partOne = (input) => {
  const inputs = input.map(el => {
    return el.split(' ').filter((i) => i !== '').slice(1)
  });

  return(
    inputs[0].map((el, index) => {
      let count = 0;
      const time = el;


      for (let i = 1; i < inputs[0][index]; i++) {
        if (i*(time-i) > inputs[1][index]) {
          count++;
        }
      }

      return count
    }).reduce((a,b) => Number(a)*Number(b))
  )
}

const partTwo = (input) => {
  const inputs = input.map(el => {return el.split(' ').filter((i) => i !== '').slice(1).join('')})

  const a = 1
  const b = -inputs[0]
  const c = -inputs[1]

  const delta1 = (-b - Math.sqrt(Math.pow(b,2) - (4*a*c)))/ (2*a)
  const delta2 = (-b + Math.sqrt(Math.pow(b,2) - (4*a*c)))/ (2*a)

  console.log(delta2-delta1)

  let count = 0;
  // for (let i = 1; i < Number(inputs[0]); i++) {
  //     if (i*(Number(inputs[0])-i) > Number(inputs[1])) count++
  // }
  
  return (
    count
  )
}

readInputByLines("/day6/input.txt")
  .then((input) => {
    // console.log(partOne(input))
    console.log(partTwo(input))
  })
