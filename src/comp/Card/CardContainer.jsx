import Card from './Card'

export default ({
  cards,
  columns
}) =>
  <div class={`blogcontainer ${columns}`}>
    {cards.map(c => <Card {...c} />)}
  </div>