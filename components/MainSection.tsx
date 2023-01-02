import Button from './Button'
import Wrapper from './Wrapper'

function MainSection() {
  return (
    <main>
      <Wrapper>
        <div className="flex flex-col md:flex-row">
          <div className="text-center order-2 md:order-1 md:w-1/2 px-5 flex flex-col gap-5">
            <h1 className="text-4xl mt-6 font-bold text-neutral-900">
              More than just shorter links
            </h1>
            <p className="text-neutral-400">
              Build your brand's recognition and get detailed insights on how
              your links are perfoming.
            </p>

            <Button rounded="rounded-full">Get Started</Button>
          </div>

          <div className="order-1 md:order-2 md:w-1/2 scale-110 translate-x-10">
            <img src="/images/illustration-working.svg" alt="" />
          </div>
        </div>
      </Wrapper>
    </main>
  )
}

export default MainSection
