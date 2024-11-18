import { forwardRef } from 'react'
import { SvgIcon } from '../type'

export default forwardRef(function SwapHorizontalIcon(props: SvgIcon, ref: any) {
  return (
    <svg ref={ref} width={12} height={12} viewBox="0 0 12 12" fill="currentColor" className="chakra-icon" {...props}>
      <path d="M10.4977 7.07087H1.1776C1.11867 7.07087 1.07046 7.11908 1.07046 7.17801V7.98159C1.07046 8.04051 1.11867 8.08873 1.1776 8.08873H9.28296L7.35037 10.5396C7.29546 10.6093 7.34501 10.7137 7.43475 10.7137H8.40573C8.47135 10.7137 8.53296 10.6843 8.57448 10.632L10.8352 7.76462C11.0562 7.48337 10.8566 7.07087 10.4977 7.07087ZM10.8205 3.91016H2.7151L4.64769 1.45926C4.7026 1.38962 4.65305 1.28516 4.56332 1.28516H3.59233C3.52671 1.28516 3.4651 1.31462 3.42358 1.36685L1.16287 4.23426C0.941887 4.51551 1.14144 4.92801 1.49903 4.92801H10.8205C10.8794 4.92801 10.9276 4.8798 10.9276 4.82087V4.0173C10.9276 3.95837 10.8794 3.91016 10.8205 3.91016Z" />
    </svg>
  )
})