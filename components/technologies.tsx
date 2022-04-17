import ReactJsIcon from "./icons/reactjs";
import TailwindIcon from "./icons/tailwind";
import DockerIcon from "./icons/docker";
import GithubIcon from "./icons/github";
import JetbrainsLogo from "./icons/jetbrains";
import LinuxFilledIcon from "./icons/linux_filled";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const technologies = [
  {
    title: 'React JS',
    description: 'My goto option for frontend development, I majorly use NextJS to kick start the project without any hustle.',
    icon: ReactJsIcon,
    class: 'dark:text-sky-400 text-sky-500'
  },
  {
    title: 'Tailwind CSS',
    description: 'I love the way tailwind reduces the time to write beautiful websites without compromising on control over the basis.',
    icon: TailwindIcon,
    class: 'dark:text-sky-400 text-sky-500'
  },
  {
    title: 'Docker',
    description: 'I always containerize the applications in development while working in a team to avoid "Works on my Machine" issues.',
    icon: DockerIcon,
    class: 'dark:text-blue-400 text-blue-500'
  },
  {
    title: 'Github',
    description: 'I personally use github as version control and github actions as CI/CD to ensure quick and secure deployment.',
    icon: GithubIcon,
    class: 'text-black dark:text-white'
  },
  {
    title: 'Linux',
    description: 'From cloud to personal computer I prefer linux for its customizations, security and obviously open source nature.',
    icon: LinuxFilledIcon,
    class: 'p-1 text-black dark:text-white'
  },
  {
    title: 'JetBrains IDE',
    description: "Batteries included IDEs, I personally use them for python, java, golang & web development.",
    icon: JetbrainsLogo,
    class: 'text-black dark:text-white'
  }
]

export default function Technologies() {
  return (
    <div
      className="w-full bg-gray-100 dark:bg-gray-900 xl:px-16 px-12 rounded-lg py-12 border border-gray-200 dark:border-gray-800 overflow-hidden shadow">
      <div
        className="sm:grid sm:grid-cols-2 lg:grid-cols-3 space-y-12 sm:space-y-0 gap-12 x_container">
        {technologies && technologies.map((item) => (
          <div
            key={item.title}>
            <div className={'flex items-center space-x-2'}>
              <item.icon className={classNames("h-7 w-auto", item.class)} aria-hidden="true"/>
              <h3 className="text-lg font-medium">
                {item.title}
              </h3>
            </div>
            <div className={'my-4'}>
              <p className="mt-2 text-sm">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
