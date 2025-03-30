"use client";

interface props {
  isExpanded: boolean;
}

export default function Sidebar(props: props) {
  return (
    <div
      className={`fixed h-full top-16 left-0 bg-foreground2 z-10 ${
        props.isExpanded ? "w-64" : "w-0"
      }`}
    ></div>
  );
}
