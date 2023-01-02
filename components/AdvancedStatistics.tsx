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
    <section className="bg-neutral-100 pt-40 py-20 px-6 -mt-24">
      <Wrapper>
        <div className="text-center text-base">
          <h3 className="text-3xl font-semibold text-neutral-800">
            Advanced Statistics
          </h3>
          <p className="text-neutral-400 mt-4">
            Track how your links are performing across the web with our advanced
            statistics dashboard
          </p>

          <ul className="grid gap-20 mt-20 relative z-0">
            <div className="absolute w-2 h-full bg-primary-500 left-1/2 -translate-x-1/2 -z-10" />
            {statistics.map((obj) => (
              <li
                key={obj.id}
                className="bg-white p-6 pt-14 pb-10 shadow-md grid gap-3"
              >
                <div className="bg-primary-800 rounded-full w-20 h-20 grid place-content-center mx-auto -mt-24">
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
