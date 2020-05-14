import { LinkProps } from 'react-router-dom/index'
export interface AdvancedLinkProp extends LinkProps {
  icon?: string,
  href?: string,
  path?: string,
  linkType?: 'inner' | 'outer',
  isOpenNewWindow?: boolean,
}
