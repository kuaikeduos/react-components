import React from 'react'
import { Link } from 'react-router-dom'
import { AdvancedLinkProp } from './interface'

const AdvancedLink: React.FC<AdvancedLinkProp> = ({
  href = '',
  linkType,
  isOpenNewWindow,
  children,
  className,
  style
}) => (
  <>
    {
      linkType !== 'outer' ?
        <Link to={href} className={className || ''} style={style || {}}>
          {children}
        </Link> :
        <a className={className || ''} style={style || {}} href={href} target={isOpenNewWindow ? '_blank' : ''}>
          {children}
        </a>
    }
  </>
)

export default AdvancedLink
