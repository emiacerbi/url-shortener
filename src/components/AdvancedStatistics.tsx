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
    <section>
      <Wrapper>
        <div>
          <h3>Advanced Statistics</h3>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard
          </p>

          <ul>
            {statistics.map((obj) => (
              <li key={obj.id}>
                <img src={obj.icon} alt={obj.title} />
                <h3>{obj.title}</h3>
                <p>{obj.content}</p>
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </section>
  )
}

export default AdvancedStatistics
