const partOne = (input) => {
  // INITIALIZATION
  const ways = input[0].split('').map((el) => {return (el === 'L' ? 0 : 1)});
  const map = {};
  let current_node = 'AAA';
  let steps = 0;

  input.slice(2).forEach((el) => {
    el = el.split(' = ')
    map[el[0].trim()] = el[1].substring(1, el[1].length-1).split(', ')
  })


  while (current_node !== 'ZZZ') {
    current_node = map[current_node][ways[steps%ways.length]]
    steps++;
  }

  console.log(steps)

}

readInputByLines("/day8/input.txt")
  .then((input) => {
    partOne(input)
  })
