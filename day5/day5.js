// Part one answer : 178159714
// Part two answer : 

const mapTreatmentPartOne = (input) => {
  const seeds = input[0].split(':')[1].trim().split(' ')
  const maps = input.slice(2,).join().split(',,').map((el => {
    return (el.split(':')[1].split(',').slice(1));
  }))

  return [seeds, maps];
}

const partOne = (data) => {
  let [current_values, maps] = data

  maps.forEach((map) => {
    console.log(map)
    current_values.forEach((val, index) => {
      for (let i = 0; i < map.length; i++) {
        line = map[i].split(' ').map((el) => Number(el))
        if (val >= line[1] && val <= (line[1] + line[2])) {
          current_values[index] = line[0] + (val - line[1])
          break;
        }
      }
    })
  })


  console.log("Result :  " + Math.min(...current_values))
  
}

readInputByLines("/day5/input.txt")
  .then((input) => {
    partOne(mapTreatmentPartOne(input));
    // partTwo(input)
  })
