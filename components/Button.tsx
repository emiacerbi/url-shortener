type Props = {
  children: string
  rounded: string
  width?: string
}

function Button({ children, rounded, width = 'fit' }: Props) {
  return (
    <button
      className={`bg-primary-500 text-neutral-100 px-8 py-3 font-bold w-fit hover:opacity-75 duration-200 transition-opacity ${rounded} ${width}`}
    >
      {children}
    </button>
  )
}

export default Button
