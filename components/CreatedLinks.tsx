import { useState } from 'react'
import { Link } from '../types'
import Wrapper from './Wrapper'
import { BASE_URL } from '../config/constants'

type Props = {
  links: Link[]
}

function CreatedLinks({ links }: Props) {
  return (
    <section className="py-10 pt-40 -mt-20 bg-neutral-100">
      <Wrapper>
        <div className="flex flex-col gap-4">
          {links?.map((link: Link) => (
            <LinkItem key={link.id} link={link} />
          ))}
        </div>
      </Wrapper>
    </section>
  )
}

export default CreatedLinks

export function LinkItem({ link }: { link: Link }) {
  const [isCopied, setIsCopied] = useState(false)

  const buttonText = isCopied ? 'Copied!' : 'Copy'

  const handleClick = (shortUrl: string) => {
    navigator.clipboard.writeText(`${BASE_URL}/${shortUrl}`)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 3000)
  }

  const copiedClass = isCopied
    ? 'bg-primary-800'
    : 'bg-primary-500 hover:opacity-75 transition-opacity duration-200'

  return (
    <article className="flex gap-4 p-4 bg-white items-center shadow-md">
      <p>{link.url}</p>
      <p className="ml-auto text-primary-500">
        {BASE_URL}/{link.shortUrl}
      </p>
      <button
        className={`py-2 px-6 rounded-md text-white shadow-sm  ${copiedClass}`}
        onClick={() => handleClick(link.shortUrl)}
        disabled={isCopied}
      >
        {buttonText}
      </button>
    </article>
  )
}
