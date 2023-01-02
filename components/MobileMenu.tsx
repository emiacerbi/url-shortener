import Button from './Button'

function MobileMenu() {
  return (
    <section className="absolute rounded-lg bg-primary-800 left-1/2 -translate-x-1/2 top-20 w-11/12">
      <ul>
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>

      <button>Login</button>
      <Button>Sign Up</Button>
    </section>
  )
}

export default MobileMenu
