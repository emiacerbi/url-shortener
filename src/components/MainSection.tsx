import Button from './Button'
import Wrapper from './Wrapper'

function MainSection() {
  return (
    <main>
      <Wrapper>
        <div>
          <h1>More than just shorter links</h1>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are perfoming.
          </p>

          <Button>Get Started</Button>
        </div>

        <div>
          <img src="/images/illustration-working.svg" alt="" />
        </div>
      </Wrapper>
    </main>
  )
}

export default MainSection
