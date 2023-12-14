readInputByLines("/day4/input.txt")
  .then((input) => {
    console.time('Excecution time')

    let scores = {};
    let score = 0;

    input.reverse().map(card => {
      const card_id = Number(card.split(':')[0].split(' ')[1])
      const card_score = (card.split(':')[1].split('|')[0].trim().split(' ')).filter((wn) => {if (card.split(':')[1].split('|')[1].trim().split(' ').indexOf(wn) >= 0) return wn}).length

      scores[card_id] = card_score;

      for (let i = card_id+1; i < card_id+1+card_score; i++)
        if (scores[i]) scores[card_id] += scores[i]

      score += scores[card_id] + 1

      console.log(scores)
    })

    console.log(score)

    console.timeEnd('Excecution time');

  })
