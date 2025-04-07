"use client";

import { useState } from "react";

import { IoMdClose } from "react-icons/io";

export default function BoxedList() {
  const [addList, setAddList] = useState(false);

  return (
    <>
      <div
        className={`absolute z-20 bg-text mt-52 rounded-sm max-w-100 max-h-50 overflow-y-hidden h-full w-full ${
          addList ? "scale-100" : "scale-0"
        }`}
      >
        <IoMdClose
          className="fill-dark-text size-8 absolute hover:cursor-pointer right-1 top-1"
          onClick={() => setAddList(false)}
        />
        <form
          action="/api/db/lists"
          method="post"
          className="flex flex-col gap-5 items-center"
        >
          <input
            type="text"
            name="list-name"
            placeholder="List name"
            defaultValue=""
            maxLength={50}
            className="w-[calc(100%-var(--spacing)*20)] text-center mt-15 text-dark-text"
          />
          <input
            type="submit"
            value="Add List"
            className="bg-button hover:bg-button-hover hover:cursor-pointer text-text w-25 h-8 rounded-sm"
          />
        </form>
      </div>
      <div
        onClick={() => {
          setAddList(!addList);
        }}
        className="w-50 h-50 bg-button hover:bg-button-hover hover:cursor-pointer select-none m-auto text-text flex"
      >
        <h1 className="m-auto text-xl whitespace-nowrap overflow-hidden overflow-ellipsis p-2">
          Create new list
        </h1>
      </div>
    </>
  );
}
