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
            <li className="mt-2">Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>

          <ul className="grid gap-2">
            <p className="font-bold text-neutral-50">Resources</p>
            <li className="mt-2">Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>

          <ul className="grid gap-2">
            <p className="font-bold text-neutral-50">Company</p>
            <li className="mt-2">About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>

          <ul className="flex gap-5">
            <li>
              <img src="/images/icon-facebook.svg" alt="" />
            </li>
            <li>
              <img src="/images/icon-twitter.svg" alt="" />
            </li>
            <li>
              <img src="/images/icon-pinterest.svg" alt="" />
            </li>
            <li>
              <img src="/images/icon-instagram.svg" alt="" />
            </li>
          </ul>
        </div>
      </Wrapper>
    </footer>
  )
}

export default Footer
