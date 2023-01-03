import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  padding?: string
}

function Wrapper({ children, padding }: Props) {
  return (
    <div
      className={`max-w-screen-lg mx-auto px-6 md:px-8 lg:px-10 xl:px-0 ${padding}`}
    >
      {children}
    </div>
  )
}

export default Wrapper
