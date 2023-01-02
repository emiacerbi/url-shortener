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
          <img src="/images/logo.svg" alt="shortly logo" />

          <div className="hidden">
            <ul>
              <li>Features</li>
              <li>Pricing</li>
              <li>Resourcers</li>
            </ul>

            <Button rounded="rounded-full">Login</Button>
            <Button rounded="rounded-full">Sign Up</Button>
          </div>

          <RxHamburgerMenu
            className="ml-auto text-2xl"
            onClick={() => setIsModalVisible(!isModalVisible)}
          />

          {isModalVisible && <MobileMenu />}
        </div>
      </Wrapper>
    </header>
  )
}

export default Header
