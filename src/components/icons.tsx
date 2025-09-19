import type { SVGProps } from 'react';

export function PlywoodProIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2 8.34V20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.34" />
      <path d="m22 6.34-10-4-10 4" />
      <path d="M2 6.34V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2.34" />
      <path d="M12 12.34V22" />
      <path d="M22 10.34V14" />
      <path d="M2 10.34V14" />
      <path d="m22 14-10 4-10-4" />
    </svg>
  );
}
