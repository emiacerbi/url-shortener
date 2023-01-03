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
        <div className="flex items-center py-7 gap-8">
          <img src="/images/logo.svg" alt="shortly logo" />

          <div className="hidden md:flex w-full gap-8 items-center text-neutral-400">
            <ul className="flex gap-8">
              <li>Features</li>
              <li>Pricing</li>
              <li>Resourcers</li>
            </ul>

            <button className="ml-auto">Login</button>
            <Button rounded="rounded-full">Sign Up</Button>
          </div>

          <RxHamburgerMenu
            className="ml-auto text-2xl md:hidden"
            onClick={() => setIsModalVisible(!isModalVisible)}
          />

          <MobileMenu isModalVisible={isModalVisible} />
        </div>
      </Wrapper>
    </header>
  )
}

export default Header
