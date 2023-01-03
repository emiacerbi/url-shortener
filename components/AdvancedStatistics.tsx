import Wrapper from './Wrapper'

const statistics = [
  {
    id: 1,
    icon: '/images/icon-brand-recognition.svg',
    title: 'Brand Recognition',
    content:
      "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.",
  },
  {
    id: 2,
    icon: '/images/icon-detailed-records.svg',
    title: 'Detailed Records',
    content:
      'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
  },
  {
    id: 3,
    icon: '/images/icon-fully-customizable.svg',
    title: 'Fullly Customizable',
    content:
      'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
  },
]

function AdvancedStatistics() {
  return (
    <section className="bg-neutral-100 py-48 -mt-24 md:-mt-20">
      <Wrapper>
        <div className="text-base">
          <div className="max-w-lg mx-auto text-center">
            <h3 className="text-3xl md:text-5xl font-semibold text-neutral-800">
              Advanced Statistics
            </h3>
            <p className="text-neutral-400 mt-4">
              Track how your links are performing across the web with our
              advanced statistics dashboard
            </p>
          </div>

          <ul className="grid gap-20 lg:gap-8 mt-20 relative z-0 justify-center lg:grid-cols-3 text-center md:text-left">
            <div className="absolute w-2 h-full bg-primary-500 left-1/2 -translate-x-1/2 -z-10 lg:hidden" />

            <div className="absolute w-full h-2 bg-primary-500 top-32 left-1/2 -translate-x-1/2 -z-10 hidden lg:block" />

            {statistics.map((obj, idx) => (
              <li
                key={obj.id}
                className={`bg-white px-6 md:px-10 pt-14 pb-10 shadow-md grid gap-3 max-w-[350px] translate-y-${(
                  idx * 10
                ).toString()}`}
              >
                <div className="bg-primary-800 rounded-full w-20 h-20 grid place-content-center mx-auto md:ml-0 -mt-24">
                  <img src={obj.icon} alt={obj.title} />
                </div>
                <h3 className="text-neutral-800 font-semibold text-xl">
                  {obj.title}
                </h3>
                <p className="text-neutral-400">{obj.content}</p>
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </section>
  )
}

export default AdvancedStatistics
