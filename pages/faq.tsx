import Layout from '~/components/layout/Layout'
import { NextPageWithLayout } from '~/lib/types'

const FAQPage: NextPageWithLayout = () => {
  return (
    <div className="m-4 flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>

      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">How are values inputted?</h2>

        <div>
          <h3 className="font-semibold">Bonus Points</h3>
          <ul className="list-disc list-outside pl-4">
            <li>
              Bonus points are counted for the first year only. For example, if
              a card offers 90,000 bonus points in the first year, and 30,000
              bonus points for keeping the card for a second year, only the
              90,000 bonus points will be counted.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Annual Fee</h3>
          <ul className="list-disc list-outside pl-4">
            <li>
              Annual fees are inclusive of any cashback offered for meeting the
              minimum spend. However, they do not count other credits that may
              be offered, such as travel credits.
            </li>
            <li>
              Annual fees are counted for the first year only. For example, if a
              card has an annual fee of $99 in the first year, and $199 for
              subsequent years, only the $99 annual fee will be counted.
            </li>
            <li>
              Cards with a monthly fee are converted to an annual fee by
              multiplying the monthly fee by 12. Note that this may not be
              accurate for cards that offer monthly fee wavers depending on
              meeting a minimum spend each month.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Minimum Spend</h3>
          <ul className="list-disc list-outside pl-4">
            <li>
              Some cards require that you meet a minimum spend every month for
              the first few of months. In these cases, the minimum spend is
              calculated by multiplying the monthly minimum spend by the number
              of months required, and the minimum spend period is set to the
              number of months required.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">
          What currency are dollars shown in?
        </h2>

        <p>
          All values are shown in Australian dollars (AUD), unless otherwise
          stated.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">
          Can I help contribute to this website?
        </h2>

        <p>
          Yes! This website is open source, and you can contribute to it on{' '}
          <a
            href="https://github.com/melbourne-tech/churner"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline hover:text-blue-500 transition-colors"
          >
            GitHub
          </a>
          .
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">I have another question...</h2>

        <p>
          No worries! Send us an email at{' '}
          <a
            href="mailto:hello@churner.com.au"
            className="text-blue-600 hover:underline hover:text-blue-500 transition-colors"
          >
            hello@churner.com.au
          </a>
          , and we&apos;ll get back to you as soon as we can.
        </p>
      </div>
    </div>
  )
}

FAQPage.getLayout = (page) => <Layout>{page}</Layout>

export default FAQPage
