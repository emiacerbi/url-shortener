import Button from './Button'
import Wrapper from './Wrapper'

function Shortener() {
  return (
    <section>
      <Wrapper padding="px-5">
        <div className="bg-primary-800 rounded-lg overflow-hidden mt-8 p-5 gap-4 flex flex-col justify-center relative z-0">
          <img
            src="/images/bg-shorten-mobile.svg"
            className="absolute top-0 right-0 -z-10"
            alt=""
          />
          <input
            className="py-4 px-4 rounded-lg"
            placeholder="Shorten a link here..."
          />
          <Button rounded="rounded-lg" width="w-full">
            Shorten it!
          </Button>
        </div>
      </Wrapper>
    </section>
  )
}

export default Shortener
