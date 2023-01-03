import Button from './Button'
import Wrapper from './Wrapper'

function BoostLinks() {
  return (
    <section className="bg-primary-800 relative z-0 ">
      <img
        src="/images/bg-boost-mobile.svg"
        className="absolute -z-10 top-0 left-0 sm:hidden w-full h-full"
        alt="background image"
      />

      <img
        src="/images/bg-boost-desktop.svg"
        className="absolute -z-10 top-0 left-0 hidden w-full h-full sm:block"
        alt=""
      />
      <Wrapper>
        <div className="grid place-content-center py-8 h-[300px] md:h-[250px]  text-neutral-100 ">
          <div className="gap-8 flex flex-col items-center">
            <h3 className="text-2xl text-center md:text-4xl font-semibold">
              Boost your links today
            </h3>
            <Button rounded="rounded-full">Get Started</Button>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default BoostLinks
