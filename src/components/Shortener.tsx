import Button from './Button'
import Wrapper from './Wrapper'

function Shortener() {
  return (
    <section>
      <Wrapper>
        <div>
          <input placeholder="Shorten a link here..." />
          <Button>Shorten it!</Button>
        </div>
      </Wrapper>
    </section>
  )
}

export default Shortener
