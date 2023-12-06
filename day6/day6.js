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

readInputByLines("/day6/input.txt")
  .then((input) => {
    console.log(partOne(input))
  })
