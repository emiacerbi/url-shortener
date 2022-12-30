import Button from './Button'
import Wrapper from './Wrapper'

function Header() {
  return (
    <header>
      <Wrapper>
        <img src="/images/logo.svg" alt="" />

        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resourcers</li>
        </ul>

        <Button>Login</Button>

        <Button>Sign Up</Button>
      </Wrapper>
    </header>
  )
}

export default Header
