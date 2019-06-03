import React from 'react'

import { DATE_FORMAT } from '~/utils/utils'
import PrettyTime from '~/components/atoms/PrettyTime'

const date = (cell) => {
  if (cell.value) {
    return (<PrettyTime
      time={cell.value}
      parseFormat={DATE_FORMAT}
    />)
  } else { return <i>none</i> }
}

export const cellFormat = {
  date
}
