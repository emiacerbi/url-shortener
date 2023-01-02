import { useState } from 'react'
import Button from './Button'
import Wrapper from './Wrapper'
import { RxHamburgerMenu } from 'react-icons/rx'
import MobileMenu from './MobileMenu'

function Header() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <header>
      <Wrapper>
        <div className="flex items-center px-5 py-7">
          <img src="/images/logo.svg" alt="" />

          <div className="hidden">
            <ul>
              <li>Features</li>
              <li>Pricing</li>
              <li>Resourcers</li>
            </ul>

            <Button>Login</Button>
            <Button>Sign Up</Button>
          </div>

          <RxHamburgerMenu
            className="ml-auto"
            onClick={() => setIsModalVisible(!isModalVisible)}
          />

          {isModalVisible && <MobileMenu />}
        </div>
      </Wrapper>
    </header>
  )
}

export default Header
