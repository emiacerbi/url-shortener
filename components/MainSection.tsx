import Button from './Button'
import Wrapper from './Wrapper'

function MainSection() {
  return (
    <main className="overflow-hidden">
      <Wrapper>
        <div className="flex flex-col md:flex-row">
          <div className="text-center md:text-left order-2 md:order-1 md:w-1/2 flex flex-col items-center md:items-start md:justify-center gap-5">
            <h1 className="text-4xl lg:text-6xl mt-14 font-bold text-neutral-900">
              More than just shorter links
            </h1>
            <p className="text-neutral-400 max-w-lg">
              Build your brand's recognition and get detailed insights on how
              your links are perfoming.
            </p>

            <Button rounded="rounded-full">Get Started</Button>
          </div>

          <div className="order-1 md:order-2 md:w-1/2 scale-110 translate-x-10 lg:translate-x-40 my-10">
            <img
              src="/images/illustration-working.svg"
              alt="person working with a desktop computer"
            />
          </div>
        </div>
      </Wrapper>
    </main>
  )
}

export default MainSection
