function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Technologies({technologies}) {
  return (
    <div
      className="rounded-lg p-6 border border-gray-200 dark:border-gray-800
      overflow-hidden shadow sm:grid sm:grid-cols-2 lg:grid-cols-3 max-w-7xl">
      {technologies && technologies.map((action) => (
        <div
          key={action.title}
          className={'p-6'}>
          <div className={'flex items-center space-x-2'}>
            <action.icon className={classNames("h-7 w-auto", action.class)} aria-hidden="true"/>
            <h3 className="text-lg font-medium">
              {action.title}
            </h3>
          </div>
          <div className={'my-4'}>
            <p className="mt-2 text-sm">
              {action.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
