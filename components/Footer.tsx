import Wrapper from './Wrapper'

function Footer() {
  return (
    <footer>
      <Wrapper>
        <img src="/images/logo.svg" alt="" />

        <ul>
          <p>Features</p>
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>

        <ul>
          <p>Resources</p>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>

        <ul>
          <p>Company</p>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>

        <ul>
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
      </Wrapper>
    </footer>
  )
}

export default Footer
