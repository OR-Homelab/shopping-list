import Link from "next/link";

interface props {
  text: string;
  href: string;
  className?: string;
}

export function NavButton(props: props) {
  return (
    <Link
      href={props.href}
      className={`bg-button hover:bg-button-hover h-10 w-60 m-auto rounded-md flex select-none ${props.className}`}
    >
      <p className="m-auto">{props.text}</p>
    </Link>
  );
}
