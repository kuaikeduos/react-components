import { LinkProps } from 'react-router-dom/index'
export interface AdvancedLinkProp extends LinkProps {
  title?: string,
  icon?: string,
  href?: string,
  path?: string,
  linkType?: 'inner' | 'outer',
  isOpenNewWindow?: boolean,
  className?: string,
  style?: React.CSSProperties
}
