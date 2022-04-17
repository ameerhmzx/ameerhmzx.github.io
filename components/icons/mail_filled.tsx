import {PropsWithoutRef} from "react";

export default function MailFilledIcon({className}: PropsWithoutRef<{ className: string }>): JSX.Element {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" >
      <path d="M0 5.88269L12 12L24 5.88269C23.9556 5.10302 23.6205 4.37018 23.0634 3.83425C22.5063 3.29831 21.7693 2.99986 21.0034 3H2.99662C2.23071 2.99986 1.49373 3.29831 0.936618 3.83425C0.379505 4.37018 0.0444228 5.10302 0 5.88269V5.88269Z"/>
      <path d="M24 8L12 13.8318L0 8V18.0841C0 18.8575 0.31607 19.5991 0.87868 20.146C1.44129 20.6928 2.20435 21 3 21H21C21.7957 21 22.5587 20.6928 23.1213 20.146C23.6839 19.5991 24 18.8575 24 18.0841V8Z"/>
    </svg>
  );
}