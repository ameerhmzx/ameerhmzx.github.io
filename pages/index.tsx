import TypicalLayout from "../layouts/typical";
import Logo from "../components/logo";
import {ChevronDoubleDownIcon} from "@heroicons/react/solid";
import {PropsWithChildren} from "react";
import Technologies from "../components/technologies";
import ContactForm from "../components/contact_form";
import GithubInvertedIcon from "../components/icons/github_inverted";
import Linkedin from "../components/icons/linkedin";
import TwitterIcon from "../components/icons/twitter";
import MailFilledIcon from "../components/icons/mail_filled";

export default function Home(): JSX.Element {
  return (
    <TypicalLayout child={(heights: any, sections: any) => {
      return (
        <>
          <Section section={sections['about']} heights={heights}>
            <HeroSection heights={heights} sections={sections}/>
          </Section>

          <Section section={sections['tools']} heights={heights} className={'justify-center'}>
            <div
              className={'pt-8 self-start justify-start font-heading text-2xl text-start'}>
              Tools & Technologies
            </div>
            <div className={'flex flex-col'}>
              <p className={'pt-4 max-w-xl text-justify'}>
                I like to experience new technologies. I have done multiple projects using a range of tools, languages &
                frameworks but some of my preferred and frequently used are listed below.
              </p>

              <div className={'my-16 self-center xl:-mx-16'}>
                <Technologies/>
              </div>
            </div>
          </Section>

          <Section section={sections['contact']} heights={heights} className={'justify-center'}>
            <div className={'pt-8 font-heading text-2xl text-start'}>Contact Me</div>
            <ContactForm/>
          </Section>
        </>
      );
    }}/>
  )
}

function Section({
                   section,
                   heights,
                   children,
                   className = '',
                   showDivider = false
                 }: PropsWithChildren<any>): JSX.Element {
  return (
    <>
      <div ref={section['ref']}
           style={{paddingTop: heights.header, minHeight: heights.vp}}
           className={'flex flex-col mx-auto x_container px-4 ' + className}>
        {children}
      </div>
      {
        showDivider && <div
              className={'mx-auto border-t border-dashed border-gray-400 dark:border-gray-700 max-w-xl w-full'}/>
      }
    </>
  );
}

function SocialLinks({className}: PropsWithChildren<any>): JSX.Element {
  return (
    <div className={className}>
      <a href={'https://github.com/ameerhmzx'} className={'p-2'}>
        <GithubInvertedIcon className={'w-5 h-auto hover:text-black dark:hover:text-white duration-300'}/>
      </a>

      <a href={'https://linkedin.com/in/ameerhmzx/'}
         className={'p-2 hover:text-black dark:hover:text-white duration-300'}>
        <Linkedin className={'w-5 h-auto hover:text-black dark:hover:text-white duration-300'}/>
      </a>

      <a href={'https://twitter.com/ameerhmzx/'}
         className={'p-2 hover:text-black dark:hover:text-white duration-300'}>
        <TwitterIcon className={'w-5 h-auto hover:text-black dark:hover:text-white duration-300'}/>
      </a>

      <a href={'mailto:ameerhmzx@gmail.com'}
         className={'p-2 hover:text-black dark:hover:text-white duration-300'}>
        <MailFilledIcon className={'w-5 h-auto hover:text-black dark:hover:text-white duration-300'}/>
      </a>
    </div>
  );
}

function HeroSection({heights, sections}: PropsWithChildren<any>): JSX.Element {
  return (
    <>
      <div
        className={'flex-1 h-full flex flex-col justify-center container mx-auto px-4'}
        style={{minHeight: heights.vp - heights.header}}>
        <span/>
        <div className={'flex-1 py-16 flex flex-wrap md:items-center justify-center mx-auto max-w-4xl min-w-xl'}>
          <div className={'flex-1 flex flex-col items-center justify-end md:justify-center'}>
            <Logo className={'w-32 sm:w-48 h-auto animate-stroke-walk stroke-current'}/>
            <div className={'flex flex-col'}>
              <p className={'font-heading emphasis-strong text-md sm:text-2xl mt-2 whitespace-nowrap'}>Ameer Hamza
                Naveed</p>
              <p className={'text-xs -mt-1 font-thin self-end whitespace-nowrap'}>@AmeerHmzX</p>
            </div>
          </div>
          <div className={'md:flex-1'}>
            <p className={'text-sm sm:text-base text-justify mt-8 md:mt-0'}>
              A privacy pragmatist and a computer enthusiast with problem-solving skills doing freelancing
              as a web developer.
              Always interested in exploring new technologies,
              especially <abbr className={'cursor-pointer'} title={'Free and open source'}>FOSS</abbr> projects.
              Fascinated by Linux and DevOps automation.
            </p>
            <div className={'flex justify-center md:justify-start'}>
              <button
                onClick={() => sections['contact'].ref?.current.scrollIntoView({behavior: 'smooth'})}
                className={'btn mt-6'}>
                Contact Me
              </button>
            </div>
          </div>
        </div>

        <div
          className={'w-full mt-4 py-4 flex flex-col sm:flex-row items-center justify-center space-x-4 text-xs sm:text-sm'}>
          <SocialLinks className={'flex-1 flex justify-end text-gray-500'}/>
          <div className={'hidden sm:block h-10 border-r border-gray-200 dark:border-gray-800'}/>
          <p onClick={() => {
            let keys = Object.keys(sections);
            let next: any = keys.at(1);
            if (next)
              sections[next].ref?.current.scrollIntoView({behavior: 'smooth'})
          }}
             className={'flex-1 text-left flex items-center text-gray-500 hover:text-black dark:hover:text-white duration-300 cursor-pointer'}>Scroll
            for details
            <ChevronDoubleDownIcon className={'w-3 ml-1 h-auto'}/>
          </p>
        </div>
      </div>
    </>
  );
}
