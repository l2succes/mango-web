import { FunctionComponent } from 'react'

const MangoApp = () => {
  return (
    <>
      <div className="flex w-full sm:w-96 md:w-full mx-auto flex-wrap lg:flex-nowrap items-center lg:px-20 xs:px-6 pt-40 lg:pt-30">
        <div className="w-full md:w-7/12 mb-10 text-center md:text-left">
          <h1 className="mb-12 text-3xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl tracking-tight">
            Pay friends <br /> instantly
          </h1>
          <p className="text-xl lg:text-2xl xl:text-3xl mb-6 max-w-xl text-th-fgd-1">
            Send and accept cross-border payments with anyone on your contact
            list.
          </p>
          <div className="inline-flex w-full sm:w-auto flex-wrap sm:space-x-4">
            <ButtonLink
              className="w-full mt-4"
              linkText="App Store"
              path="https://play.google.com/store/apps/details?id=markets.mango"
              size="large"
            />
            <ButtonLink
              className="w-full mt-4"
              linkText="Google Play"
              path="https://play.google.com/store/apps/details?id=markets.mango"
              size="large"
            />
          </div>
        </div>
        <div className="flex w-full md:w-5/12 mx-auto mt-20 md:mt-0">
          <video loop autoPlay muted playsInline>
            <source
              src="../videos/mango-payments-hero.webm"
              type="video/webm"
            />
            <source src="../videos/mango-payments-hero.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="w-full sm:w-96 md:w-full mx-auto grid gap-20 grid-cols-1 md:grid-cols-3 lg:px-20 xs:px-6 py-20 text-center md:text-left">
        <div className="pt-10">
          <span className="inline-flex p-4 rounded-full border-2 mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.2"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </span>
          <h3 className="relative text-base lg:text-xl xl:text-2xl font-display text-th-fgd-3 leading-snug max-w-xs">
            Get a <span className="text-th-fgd-1">number</span> or QR code of
            the recipient.
          </h3>
        </div>
        <div className="pt-10">
          <span className="inline-flex p-1 rounded-full border-2 mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="0.8"
              stroke="currentColor"
              className="w-16 h-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 7.5l3 4.5m0 0l3-4.5M12 12v5.25M15 12H9m6 3H9m12-3a9"
              />
            </svg>
          </span>
          <h3 className="relative text-base lg:text-xl xl:text-2xl font-display text-th-fgd-3 leading-snug max-w-xs">
            Specify the <span className="text-th-fgd-1">amount</span> and select
            the currency.
          </h3>
        </div>
        <div className="pt-10">
          <span className="inline-flex p-4 rounded-full border-2 mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.2"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </span>
          <h3 className="relative text-base lg:text-xl xl:text-2xl font-display text-th-fgd-3 leading-snug max-w-xs">
            <span className="text-th-fgd-1">Pay</span> someone or send payment
            <span className="text-th-fgd-1">request</span>.
          </h3>
        </div>
      </div>

      <div className="lg:px-20 xs:px-6 py-20">
        <hr />
      </div>

      <div className="lg:px-20 xs:px-6 py-20 w-full sm:w-96 md:w-10/12 xl:w-9/12 mx-auto">
        <div className="w-full mx-auto text-center md:w-[28rem] lg:w-[42rem]">
          <span className="flex inline-flex uppercase tracking-widest text-base font-bold text-th-primary rounded-full border-2 border-th-primary px-4 py-2">
            Payments
          </span>
          <h2 className="mb-10 mt-12 text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl tracking-tight">
            Send &amp; accept <br /> payments
          </h2>
          <p className="text-2xl xl:text-3xl xl:leading-tight">
            Securely pay or get paid with a phone number or QR code.{' '}
            <span className="text-th-fgd-1">Guaranteed and immediate.</span>
          </p>
        </div>
        <div className="flex flex-wrap md:flex-nowrap w-full mx-auto items-center mt-20 text-center md:text-left">
          <div className="w-full md:w-1/2 md:mx-10">
            <video className="md:w-10/12" loop autoPlay muted playsInline>
              <source
                src="../videos/mango-payments-pay.webm"
                type="video/webm"
              />
              <source src="../videos/mango-payments-pay.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="w-full md:w-1/2 py-10 md:px-10">
            <h3 className="mb-8 text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              Pay friends instantly
            </h3>
            <p className="text-l leading-snug">
              Pay without requiring a bank account. All you need is a phone
              number or a QR code to instantly transfer payments. Say goodbye to
              the hassle of traditional banking methods.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap w-full mx-auto items-center mt-20 text-center md:text-left">
          <div className="w-full md:w-1/2 md:mx-10 md:order-2">
            <video
              className="md:w-10/12 ml-auto"
              loop
              autoPlay
              muted
              playsInline
            >
              <source
                src="../videos/mango-payments-request.webm"
                type="video/webm"
              />
              <source
                src="../videos/mango-payments-request.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="w-full md:w-1/2 py-10 md:px-10 md:order-1">
            <h3 className="mb-8 text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              Requests <br /> a payment
            </h3>
            <p className="text-l leading-snug">
              Send payment request to the people on your contact list even those
              who do not have the app. Submit the request, and we will notify
              you when it is done.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:px-20 xs:px-6 py-20">
        <hr />
      </div>

      <div className="lg:px-20 xs:px-6 py-20 w-full sm:w-96 md:w-10/12 xl:w-9/12 mx-auto text-center">
        <div className="w-full mx-auto md:w-[30rem] lg:w-[44rem]">
          <span className="flex inline-flex uppercase tracking-widest text-base font-bold text-th-primary rounded-full border-2 border-th-primary px-4 py-2">
            Wallet
          </span>
          <h2 className="mb-10 mt-12 text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl tracking-tight">
            Build your <br />
            crypto portfolio
          </h2>
          <p className="text-2xl xl:text-3xl xl:leading-tight">
            Convert your funds into one of 9 the most popular tokens.{' '}
            <span className="text-th-fgd-1">
              Earn interest up to 45% per year.
            </span>
          </p>
        </div>
        <div className="grid gap-20 grid-cols-1 md:grid-cols-3 mt-20 w-full mx-auto px-10">
          <div className="text-base">
            <h4 className="pb-4">Convert tokens</h4>
            <p className="text-l leading-snug">
              Stay up-to-date with the crypto market. Track the prices. Convert
              one token to another.
            </p>
            <img
              className="mt-12"
              src="../img/mango-app-wallet-1.png"
              alt="Mobile App Mango"
            />
          </div>
          <div className="text-base">
            <h4 className="pb-4">Earn interest</h4>
            <p className="text-l leading-snug">
              Deposit funds from your wallet into Mango Earn to earn Annual
              Percentage Yield.
            </p>
            <img
              className="mt-12"
              src="../img/mango-app-wallet-2.png"
              alt="Mobile App Mango"
            />
          </div>
          <div className="text-base">
            <h4 className="pb-4">Withdraw</h4>
            <p className="text-l leading-snug">
              Manage your portfolio. Withdraw your funds directly to your bank
              account.
            </p>
            <img
              className="mt-12"
              src="../img/mango-app-wallet-3.png"
              alt="Mobile App Mango"
            />
          </div>
        </div>
      </div>

      <div className="lg:px-20 xs:px-6 py-20">
        <hr />
      </div>

      <div className="lg:px-20 xs:px-6 py-20">
        <div className="flex justify-between">
          <div className="w-full">
            <span className="flex inline-flex uppercase tracking-widest text-base font-bold text-th-primary rounded-full border-2 border-th-primary px-4 py-2">
              In Action
            </span>
            <h2 className="mb-10 mt-12 text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl tracking-tight">
              Community <br /> driven features
            </h2>
            <p className="text-2xl xl:text-3xl xl:leading-tight">
              <span className="text-th-fgd-1">People love Mango.</span> See what{' '}
              <br />
              the community is saying about us.
            </p>
          </div>
          {/* <div className="flex flex-nowrap self-end space-x-4 hidden sm:flex">
            <a
              href=""
              className="inline-flex justify-center items-center w-12 h-12 bg-th-red-dark rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="white"
                className="w-6 h-6 pr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </a>
            <a
              href=""
              className="inline-flex justify-center items-center w-12 h-12 bg-th-red-dark rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="white"
                className="w-6 h-6 pl-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </a>
          </div> */}
        </div>
        <div className="mt-24 w-full grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex-col text-base rounded-3xl border-2 border-th-bkg-3 p-8">
            <div className="self-start">
              <img
                className="w-1/4 rounded-xl"
                src="../reviews/mango-user-review-1.png"
                alt="Mobile App Mango"
              />
              <p className="lg:text-l mt-10 mb-10 leading-snug">
                Being constantly on the move, I have been using the Mango app to
                pay my friends in various countries with their respective local
                currencies, which has saved me the hassle of dealing with
                currency exchange rates.
              </p>
            </div>
            <span className="font-bold self-end">
              Luc <br />{' '}
              <span className="text-sm font-normal">
                Entrepreneur, Digital Nomad
              </span>
            </span>
          </div>
          <div className="flex-col text-base rounded-3xl border-2 border-th-bkg-3 p-8">
            <div className="self-start">
              <img
                className="w-1/4 rounded-xl"
                src="../reviews/mango-user-review-2.png"
                alt="Mobile App Mango"
              />
              <p className="lg:text-l mt-10 mb-10 leading-snug">
                What I like most about the app is the ability to make payments
                to anyone on my contact list using just their phone number.
                It&apos;s simple to split costs for things like restaurant
                bills, concert tickets, or hotels.
              </p>
            </div>
            <span className="font-bold self-end">
              Maya <br />{' '}
              <span className="text-sm font-normal">Photographer, Berlin</span>
            </span>
          </div>
          <div className="flex-col text-base rounded-3xl border-2 border-th-bkg-3 p-8">
            <div className="self-start">
              <img
                className="w-1/4 rounded-xl"
                src="../reviews/mango-user-review-3.png"
                alt="Mobile App Mango"
              />
              <p className="lg:text-l mt-10 mb-10 leading-snug">
                It&apos;s a simple, beautiful, yet incredibly powerful wallet.
                Not only can I pay with crypto, but I can also invest in top
                tokens and earn additional interest on all the funds I receive.
              </p>
            </div>
            <span className="font-bold self-end">
              Lars <br />{' '}
              <span className="text-sm font-normal">Youtuber, Stockholm</span>
            </span>
          </div>
          <div className="flex-col text-base rounded-3xl border-2 border-th-bkg-3 p-8">
            <div className="self-start">
              <img
                className="w-1/4 rounded-xl"
                src="../reviews/mango-user-review-4.png"
                alt="Mobile App Mango"
              />
              <p className="lg:text-l mt-10 mb-10 leading-snug">
                Although the app has state-of-the-art security and runs on
                blockchain technology, it is easy to access your funds using
                just your phone number and email, without any hassle.
              </p>
            </div>
            <span className="font-bold self-end">
              Mario <br />{' '}
              <span className="text-sm font-normal">
                Developer, Buenos Aires
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="lg:px-20 xs:px-6 py-20 mt-20">
        <div className="flex bg-th-bkg-3 rounded-3xl px-10 py-20">
          <div className="w-1/2 relative hidden md:block">
            <video
              loop
              autoPlay
              playsInline
              muted
              className="absolute lg:w-11/12 xl:w-10/12 2xl:w-10/12 xl:ml-10"
            >
              <source src="../videos/mango-download.webm" type="video/webm" />
              <source src="../videos/mango-download.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="w-full md:w-1/2 flex-wrap xl:py-5 2xl:py-10">
            <span className="flex inline-flex uppercase tracking-widest text-base font-bold text-th-primary rounded-full border-2 border-th-primary px-4 py-2">
              Get the app
            </span>
            <h2 className="mb-10 mt-12 text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl tracking-tight">
              Download the Mango app
            </h2>
            <p className="text-xl lg:text-xl xl:text-2xl max-w-xl text-th-fgd-1">
              Get started with the most powerful wallet supporting instant
              payments and easy crypto investments.
            </p>
            <div className="inline-flex w-full flex-wrap sm:space-x-4 mt-6">
              <ButtonLink
                className="w-full mt-4"
                linkText="App Store"
                path="https://play.google.com/store/apps/details?id=markets.mango"
                size="large"
              />
              <ButtonLink
                className="w-full mt-4"
                linkText="Google Play"
                path="https://play.google.com/store/apps/details?id=markets.mango"
                size="large"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MangoApp

interface ButtonLinkProps {
  path: string
  className?: string
  secondary?: boolean
  linkText: string
  size?: 'large' | 'medium' | 'small'
}

const ButtonLink: FunctionComponent<ButtonLinkProps> = ({
  linkText,
  path,
  className,
  secondary,
  size = 'medium',
}) => {
  return (
    <a
      className={`flex sm:w-max items-center justify-center rounded-xl ${
        secondary
          ? 'border border-th-red-dark'
          : 'bg-th-red-dark md:hover:brightness-90'
      } ${
        size === 'medium'
          ? 'h-10 px-4 text-sm'
          : size === 'large'
          ? 'h-12 px-6'
          : 'h-8 px-3'
      } default-transition font-display focus:outline-none text-th-fgd-1 ${className}`}
      href={path}
      rel="noopener noreferrer"
      target="_blank"
    >
      {linkText}
    </a>
  )
}
