import cn from 'classnames'
import {blockWrapper} from '../../wrappers'

export default ({
  className,
  content
}) =>
  (content &&
    <div class={cn(className, 'content-area')}>
      {content.map(c => blockWrapper(c))}
    </div>
  )
