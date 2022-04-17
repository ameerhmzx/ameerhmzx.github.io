import LinkedInIcon from "./icons/linkedin";
import TwitterIcon from "./icons/twitter";
import GithubInvertedIcon from "./icons/github_inverted";
import MailFilledIcon from "./icons/mail_filled";

const contact_details = [
  {
    type: 'Email',
    icon: MailFilledIcon,
    link: 'mailto:ameerhmzx@gmail.com',
    text: 'ameerhmzx@gmail.com'
  },
  {
    type: 'Github',
    icon: GithubInvertedIcon,
    link: 'https://github.com/ameerhmzx/',
    text: '@ameerhmzx'
  },
  {
    type: 'LinkedIn',
    icon: LinkedInIcon,
    link: 'https://linkedin.com/in/ameerhmzx/',
    text: '@ameerhmzx'
  },
  {
    type: 'Twitter',
    icon: TwitterIcon,
    link: 'https://twitter.com/ameerhmzx/',
    text: '@ameerhmzx'
  }
]

export default function ContactForm() {
  return (
    <div>
      <div className="pb-4 mx-auto md:grid md:grid-cols-5 gap-12 space-y-4 md:space-y-0">
        <div
          className="md:col-span-2">
          <div className="mx-auto">
            <p className={'py-4 text-justify'}>
              Anything I can help you with? Feel free to contact.
            </p>
            <dl className="py-4 text-base text-gray-600 dark:text-gray-500">

              {contact_details && contact_details.map((item, i) => (
                <div key={i} className="mt-4 group max-w-min cursor-pointer">
                  <dt className="sr-only">{item.type}</dt>
                  <dd className="flex items-center max-w-min">
                    <item.icon
                      className="flex-shrink-0 h-auto w-5 text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white duration-300"
                      aria-hidden="true"/>
                    <a href={item.link}
                       className="ml-3 group-hover:text-black dark:group-hover:text-white duration-300">
                      {item.text}
                    </a>
                  </dd>
                </div>
              ))}

            </dl>
          </div>
        </div>
        <div className="lg:py-0 py-8 px-4 sm:px-6 md:col-span-3">
          <div className="max-w-lg mx-auto md:max-w-none">
            <form action="https://formsubmit.co/6455e385e74b2e0cdfac57d66943ea9b" method="POST"
                  className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="full-name" className="sr-only">
                  Full name
                </label>
                <input
                  type="text"
                  name="Full Name"
                  id="full-name"
                  autoComplete="name"
                  className="input w-full"
                  placeholder="Full name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="Email"
                  type="email"
                  autoComplete="email"
                  className="input w-full"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  type="text"
                  name="Phone"
                  id="phone"
                  autoComplete="tel"
                  className="input w-full"
                  placeholder="Phone"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="Message"
                  rows={4}
                  className="input w-full"
                  placeholder="Message"
                  defaultValue={''}
                />
              </div>
              <div className="flex justify-center md:justify-start">
                <button
                  type="submit"
                  className="btn"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}