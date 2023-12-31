const symbols = "~!@#$%^*()-_=+[]{};:,/?";

const directions = [
  // haut
  [-1,0],
  [-1,-1],
  [-1,1],
  // milieu
  [0,-1],
  [0,1],
  // bas
  [1,-1],
  [1,0],
  [1,1]
];

const setCharAt = (str, index, chr) => {
  if (index > str.length-1) return str;
  return str.substring(0, index) + chr + str.substring(index+1);
}

const findNumber = (line, index) => {
  let nb = [];
  //left
  for (let el_i = index; el_i >= 0; el_i--) {
    if (!isNaN(parseInt(line[el_i]))) {
      nb.push(line[el_i])
      line = setCharAt(line, el_i, '.')
    } 
    else break;
  }

  nb = nb.reverse()

  // right
  if (index + 1 < line.length) {
    for (let el_i = index+1; el_i < line.length; el_i++) {
      if (!isNaN(parseInt(line[el_i]))) {
        nb.push(line[el_i])
        line = setCharAt(line, el_i, '.')
      } else break;
    } 
  }
  return [line, nb.join('')];
}


const partTwo = (input) => {
  let nbs = []
  input.forEach((line, index) => {
    for (let s in line) {
      if (line.charAt(s) === '*') {
        const gear = [];

        // find numbers near "*"
        directions.forEach((dir) => {
          const line_dir = input[index + dir[0]]
          if (line_dir) {
            const dir_col = Number(s) + dir[1];
            if ((dir_col >= 0) && (dir_col < line_dir.length) && !isNaN(parseInt(line_dir.charAt(dir_col), 10))) {
              const result = findNumber(line_dir, dir_col);
              gear.push(result[1])
              input[index + dir[0]] = result[0]
            }
          }
        })

        if (gear.length >= 2) nbs.push(gear.reduce((a,b) => Number(a)*Number(b)))
      }
    }
  })
  console.log(nbs.reduce((a,b) => Number(a) + Number(b)));
}

const partOne = (input) => {
  let nbs = [];

  input.forEach((line, index) => {
    for (let s in line) {

      if (line.charAt(s) !== '.' && isNaN(line.charAt(s))) {
        directions.forEach((dir) => {
          // find line if it exists
          const line_dir = input[index + dir[0]]
          if (line_dir) {
            // find col if it exists
            const dir_col = Number(s) + dir[1];
            if ((dir_col >= 0) && (dir_col < line_dir.length) && !isNaN(parseInt(line_dir.charAt(dir_col), 10))) {
              const result = findNumber(line_dir, dir_col);
              nbs.push(result[1]);
              input[index + dir[0]] = result[0]
            }
          }
        })
      }
    }
  });

  console.log(nbs.reduce((a,b) => {return Number(a) + Number(b)}))
}

readInputByLines("/day3/input.txt")
  .then((input) => {
    partTwo(input)
  })
