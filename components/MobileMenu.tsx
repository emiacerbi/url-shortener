import Button from './Button'

function MobileMenu({ isModalVisible }: { isModalVisible: boolean }) {
  const isHidden = isModalVisible ? 'scale-100' : 'scale-0'
  return (
    <section
      className={`absolute z-20 rounded-lg p-6 flex flex-col gap-6 max-w-md md:hidden text-neutral-100 bg-primary-800 left-1/2 -translate-x-1/2 top-20 w-11/12 duration-200 transition-transform ${isHidden}`}
    >
      <ul className="flex flex-col text-center gap-4">
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>

      <div className="h-[1px] w-full bg-neutral-100 opacity-20" />

      <button>Login</button>
      <Button rounded="rounded-full" width="w-full">
        Sign Up
      </Button>
    </section>
  )
}

export default MobileMenu
