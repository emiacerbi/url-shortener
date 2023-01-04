import { Link } from '../types'
import Wrapper from './Wrapper'

type Props = {
  links: Link[]
}

function CreatedLinks({ links }: Props) {
  return (
    <section>
      <Wrapper>
        <h1>Created links here</h1>
      </Wrapper>
    </section>
  )
}

export default CreatedLinks
