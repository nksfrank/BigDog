import ContentArea from './shared/ContentArea';
import Block from './Block';
import {BlogBlock, BlogContainer} from './Blog'
import {Card, CardContainer} from './Card';

const NoComponent = ({$componentType}) => {console.log($componentType); return (<div>Component <code>{$componentType}</code> doesn't exist</div>)};

const components = new Map([
  ["$contentArea", ContentArea],
  ["block", Block],
  ["blogBlock", BlogBlock],
  ["card", Card],
  ["cardContainer", CardContainer],

  ["_noComponent", NoComponent]
]);

export default ($componentType) => components.get($componentType) || components.get("_noComponent");