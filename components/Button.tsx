type Props = {
  children: string
  rounded: string
  width?: string
}

function Button({ children, rounded, width = 'fit' }: Props) {
  return (
    <button
      className={`bg-primary-500 text-neutral-100 px-8 py-4 font-bold w-fit mx-auto ${rounded} ${width}`}
    >
      {children}
    </button>
  )
}

export default Button
