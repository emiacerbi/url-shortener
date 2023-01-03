import Icon from './Icon'
import Logo from './Logo'
import Wrapper from './Wrapper'

function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-100">
      <Wrapper>
        <div className="flex flex-col md:flex-row md:justify-between md:text-left md:items-start items-center text-center text-base gap-12 text-neutral-300 py-12">
          <Logo color="white" />

          <ul className="grid gap-2">
            <p className="font-bold text-neutral-50">Features</p>
            <li className="mt-2 cursor-pointer hover:text-primary-500">
              Link Shortening
            </li>
            <li className="cursor-pointer hover:text-primary-500">
              Branded Links
            </li>
            <li className="cursor-pointer hover:text-primary-500">Analytics</li>
          </ul>

          <ul className="grid gap-2">
            <p className="font-bold text-neutral-50">Resources</p>
            <li className="mt-2 cursor-pointer hover:text-primary-500">Blog</li>
            <li className="cursor-pointer hover:text-primary-500">
              Developers
            </li>
            <li className="cursor-pointer hover:text-primary-500">Support</li>
          </ul>

          <ul className="grid gap-2">
            <p className="font-bold text-neutral-50">Company</p>
            <li className="mt-2 cursor-pointer hover:text-primary-500">
              About
            </li>
            <li className="cursor-pointer hover:text-primary-500">Our Team</li>
            <li className="cursor-pointer hover:text-primary-500">Careers</li>
            <li className="cursor-pointer hover:text-primary-500">Contact</li>
          </ul>

          <ul className="flex gap-5">
            <li className="cursor-pointer">
              <Icon name="facebook" />
            </li>
            <li className="cursor-pointer">
              <Icon name="twitter" />
            </li>
            <li className="cursor-pointer">
              <Icon name="pinterest" />
            </li>
            <li className="cursor-pointer">
              <Icon name="instagram" />
            </li>
          </ul>
        </div>
      </Wrapper>
    </footer>
  )
}

export default Footer
