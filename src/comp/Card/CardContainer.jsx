import Card from './Card';

const CardContainer = ({
  cards,
  columns
}) =>
  <div class={`blogcontainer ${columns}`}>
    {cards.map(c => <Card {...c} />)}
  </div>;

export default CardContainer;