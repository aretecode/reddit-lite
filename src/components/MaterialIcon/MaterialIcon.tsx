import * as React from 'react'
import styled from 'styled-components'
import { fromIconNameToPath, iconInvisibleSquarePathView } from './deps'
import { MaterialIconProps } from './typings'

export function MaterialIcon(props: MaterialIconProps) {
  const {icon, ...remainingProps} = props
  return (
    <svg role="img" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg" {...remainingProps}>
      <title key="title">{icon} icon</title>
      <path key="shape" d={fromIconNameToPath(icon)} />
      {iconInvisibleSquarePathView}
    </svg>
  )
}

export const StyledMaterialIcon = styled(MaterialIcon)`
  width: 24px;
  height: 24px;
`
