import { useState, ChangeEvent, SyntheticEvent } from 'react'
import Button from './Button'
import Wrapper from './Wrapper'
import { isValidUrl } from '../helpers/isValidUrl'
import { useRouter } from 'next/router'

function Shortener() {
  const [linkInput, setLinkInput] = useState('')
  const [error, setError] = useState<boolean | string>(false)
  const [success, setSuccess] = useState<boolean | string>(false)
  const router = useRouter()

  const refreshData = () => {
    router.replace(router.asPath)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLinkInput(e.target.value)
  }

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()

    const hasHttps = linkInput.slice(0, 8)

    if (hasHttps !== 'https://') {
      setError('Please paste the full link')
      return
    }

    if (linkInput.length < 8) {
      setError('Link should be at least 8 characters long')
      return
    }

    if (!isValidUrl(linkInput)) {
      setError('Please use a better link format')
      return
    }

    setError(false)
    setSuccess(true)

    const url = linkInput

    const response = await fetch('/api/url-shortener', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    })

    const data = await response.json()
    console.log(data)
    setLinkInput('')

    refreshData()
  }

  const errorRing = error
    ? 'ring ring-red-500 focus:outline-none placeholder:text-red-500'
    : 'ring-primary-500'

  const errorScale = error ? 'scale-100' : 'scale-0'
  const successScale = success ? 'scale-100' : 'scale-0'

  return (
    <section className="pt-14">
      <Wrapper>
        <form
          onSubmit={handleSubmit}
          className="bg-primary-800 rounded-lg overflow-hidden p-5 md:p-12  relative z-0"
        >
          <img
            src="/images/bg-shorten-mobile.svg"
            className="absolute top-0 right-0 -z-10"
            alt="background image"
          />

          <div className="md:flex-row gap-4 flex flex-col">
            <input
              className={`py-3 px-4 rounded-lg hover:outline hover:outline-neutral-400 focus:outline-none focus:ring w-full ${errorRing}`}
              placeholder="Shorten a link here..."
              name="link"
              onChange={handleChange}
              value={linkInput}
            />

            <Button rounded="rounded-lg" width="w-full min-w-fit md:w-fit">
              Shorten it!
            </Button>
          </div>

          <p
            className={`absolute bottom-4 text-red-500 italic text-sm duration-200 transition-transform ${errorScale}`}
          >
            {error}
          </p>

          <p
            className={`absolute bottom-4 text-primary-500 italic text-sm duration-200 transition-transform ${successScale}`}
          >
            Succesfully created link!
          </p>
        </form>
      </Wrapper>
    </section>
  )
}

export default Shortener
