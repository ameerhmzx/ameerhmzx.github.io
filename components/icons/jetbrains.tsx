import {PropsWithoutRef} from "react";

export default function JetbrainsLogo({className}: PropsWithoutRef<{ className: string }>): JSX.Element {
  return (
    <svg className={className} viewBox="0 0 105 105" fill="currentColor">
      <path d="m22.5 22.5h60v60h-60z"/>
      <g className={'dark:text-black text-white dark:stroke-2 dark:stroke-black'} fill="currentColor">
        <path d="m29.03 71.25h22.5v3.75h-22.5z"/>
      </g>
    </svg>
  );
}