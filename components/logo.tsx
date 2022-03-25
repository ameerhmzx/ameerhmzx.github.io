import type {PropsWithChildren} from "react";

export default function Logo({className}: PropsWithChildren<any>) {
    return (
        <svg className={className} viewBox="0 0 150 150" fill="currentColor">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M103.659 39.0496L87.3491 0H63.75L0 150H23.25L75.6522 26.7007L92.1655 66.2374L103.659 39.0496ZM110.095 109.166L127.151 150H150L121.589 81.9777L110.095 109.166ZM126.75 0H150L86.25 150H63L84.9938 98.25H63L72.8846 75H94.875L126.75 0Z"/>
        </svg>
    );
}