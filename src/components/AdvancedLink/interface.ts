export interface AdvancedLinkProp {
  title?: string,
  icon?: string,
  href?: string,
  path?: string,
  linkType?: 'inner' | 'outer',
  isOpenNewWindow?: boolean,
  className?: string,
  style?: React.CSSProperties
}
