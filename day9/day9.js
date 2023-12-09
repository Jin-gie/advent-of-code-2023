// Result part one: 1743490457
// Result part two: 1053

const isLineFullZeros = (line) => {
  return(
    line[0] === 0 &&
    line.every((val, i, arr) => val === arr[0])
  )
}

const fillToZeros = (line) => {
  line = line.split(' ').map((el) => Number(el));
  let tmp = [];
  tmp[0] = line;

  
  while (!isLineFullZeros(tmp[tmp.length-1])) {
    tmp[tmp.length] = []
    for (let i = 0; i < tmp[tmp.length-2].length-1; i++) {
      tmp[tmp.length-1].push(tmp[tmp.length-2][i+1] - tmp[tmp.length-2][i]);
    }     
  }

  return tmp;
}

const partOne = (input) => {
  console.log(
    input.map((line) => {
      
      const tmp = fillToZeros(line)
  
      let extra_nb = 0;
  
      tmp.reverse().forEach((line) =>  {
        extra_nb += line[line.length-1]
      })
  
      return extra_nb
    }).reduce((a,b) => a+b)
  );
}

const partTwo = (input) => {
  return (
    input.map((line) => {
      const tmp = fillToZeros(line);

      let extra_nb = 0;

      tmp.reverse().forEach((line) => {
        extra_nb = line[0] - extra_nb
      })


      return extra_nb
    })
  ).reduce((a,b) => a+b)
}

readInputByLines("/day9/input.txt")
  .then((input) => {
    // partOne(input)
    console.log(partTwo(input));
  })