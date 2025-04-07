"use client";

interface BoxedListProps {
  onClick?: () => void;
  title: string;
}

export default function BoxedList(props: BoxedListProps) {
  return (
    <div
      onClick={() => {
        if (props.onClick) props.onClick();
      }}
      className="w-50 h-50 bg-button hover:bg-button-hover select-none m-auto text-text flex"
    >
      <h1 className="m-auto text-xl whitespace-nowrap overflow-hidden overflow-ellipsis p-2">
        {props.title}
      </h1>
    </div>
  );
}
