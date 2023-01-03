import Button from './Button'
import Wrapper from './Wrapper'

function Shortener() {
  return (
    <section className="pt-14">
      <Wrapper>
        <div className="bg-primary-800 rounded-lg md:flex-row overflow-hidden  p-5 md:p-12 gap-4 flex flex-col justify-center relative z-0">
          <img
            src="/images/bg-shorten-mobile.svg"
            className="absolute top-0 right-0 -z-10"
            alt=""
          />
          <input
            className="py-3 px-4 rounded-lg max-w-[730px] w-full"
            placeholder="Shorten a link here..."
          />
          <Button rounded="rounded-lg" width="w-full min-w-fit md:w-fit">
            Shorten it!
          </Button>
        </div>
      </Wrapper>
    </section>
  )
}

export default Shortener
