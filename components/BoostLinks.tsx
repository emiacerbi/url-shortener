import Button from './Button'
import Wrapper from './Wrapper'

function BoostLinks() {
  return (
    <section>
      <Wrapper>
        <div className="bg-primary-800 grid place-content-center gap-5 p-8 text-neutral-100 relative z-0 min-h-[300px]">
          <img
            src="/images/bg-boost-mobile.svg"
            className="absolute -z-10 top-0 left-0"
            alt=""
          />
          <h3 className="text-2xl font-semibold">Boost your links today</h3>
          <Button rounded="rounded-full">Get Started</Button>
        </div>
      </Wrapper>
    </section>
  )
}

export default BoostLinks
