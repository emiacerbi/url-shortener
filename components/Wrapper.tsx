import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  padding?: string
}

function Wrapper({ children, padding }: Props) {
  return <div className={`max-w-screen-xl mx-auto ${padding}`}>{children}</div>
}

export default Wrapper
