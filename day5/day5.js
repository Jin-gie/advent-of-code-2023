// Part one answer : 178159714
// Part two answer : 

const mapTreatmentPartOne = (input) => {
  const seeds = input[0].split(':')[1].trim().split(' ')
  const maps = input.slice(2,).join().split(',,').map((el => {
    return (el.split(':')[1].split(',').slice(1));
  }))

  return [seeds, maps];
}

const mapTreatmentPartTwo = (input) => {
  const tmp_seeds = input[0].split(':')[1].trim().split(' ').map((e) => Number(e))
  let seeds = []
  for (let s = 0; s < tmp_seeds.length; s += 2) {
    console.log(`start ${tmp_seeds[s]}, step ${tmp_seeds[s+1]}`)
    seeds.push([tmp_seeds[s], tmp_seeds[s] + tmp_seeds[s+1]])
  }

  const maps = input.slice(2,).join().split(',,').map((el => {
    return (el.split(':')[1].split(',').slice(1).map((el) => {
      el = el.split(' ').map((el) => Number(el))
      el[2] = el[1] + el[2]
      return el
    }));
  }))

  const tmp = []

  seeds.forEach((seed) => {
    maps.forEach((map) => {
      for (let i = 0; i < map.length; i++) {
        if (seed[0] >= map[i][1] && seed[1] <= map[i][2]) {
          // case seed inside map
          break;
        } else if (seed[0] < map[i][1] && seed[1] >= map[i][1]) {
          // case seed lower & in map
        } else if (seed[0] >= map[i][1] && seed[1] > map[i][1]) {
          // case seed higher & in map
        }
      }
    })
  })

  return [seeds, maps];
}

const findLowestLocation = (data) => {
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
    // findLowestLocation(mapTreatmentPartOne(input));
    // findLowestLocation(mapTreatmentPartTwo(input));

    mapTreatmentPartTwo(input)
    // mapTreatmentPartTwo(input)
  })
