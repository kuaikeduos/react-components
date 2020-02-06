import React from 'react'
import { Link } from 'react-router-dom'
import { AdvancedLinkProp } from './interface'

const AdvancedLink: React.FC<AdvancedLinkProp> = ({
  href = '',
  linkType,
  isOpenNewWindow,
  children,
  className,
  style,
  replace,
  innerRef,
  title,
  target
}) => (
  <>
    {
      linkType !== 'outer' ?
        <Link title={title} to={href} className={className || ''} style={style || {}} replace={replace} innerRef={innerRef} target={isOpenNewWindow ? '_blank' : target}>
          {children}
        </Link> :
        <a className={className || ''} style={style || {}} href={href} target={isOpenNewWindow ? '_blank' : target} rel="noopener norefferrer">
          {children}
        </a>
    }
  </>
)

export default AdvancedLink
