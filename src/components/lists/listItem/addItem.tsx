"use client";

import { IoMdAdd, IoMdClose } from "react-icons/io";

import { useState } from "react";

interface AddItemProps {
  addItem: () => void;
}

export default function AddItem(props: AddItemProps) {
  const [addItem, setAddItem] = useState(false);

  return (
    <div className="ml-[95%]">
      <button
        onClick={() => {
          setAddItem(!addItem);
        }}
        className="text-dark-text size-5 bg-button hover:bg-button-hover hover:cursor-pointer rounded-sm flex"
      >
        <IoMdAdd className="m-auto" />
      </button>
      <div
        className={`absolute z-20 bg-text rounded-sm mt-6 max-w-100 max-h-50 overflow-y-hidden h-full w-full ${
          addItem ? "scale-100" : "scale-0"
        }`}
      >
        <IoMdClose
          className="fill-dark-text size-8 absolute hover:cursor-pointer right-1 top-1"
          onClick={() => setAddItem(false)}
        />
        <form id="addItem" className="flex flex-col gap-5 items-center">
          <input
            type="text"
            name="item-name"
            placeholder="Item name"
            defaultValue=""
            maxLength={50}
            className="w-[calc(100%-var(--spacing)*20)] text-center mt-5 text-dark-text"
          />
          <input
            type="number"
            name="item-amount"
            placeholder="Item amount"
            defaultValue=""
            maxLength={50}
            className="w-[calc(100%-var(--spacing)*20)] text-center text-dark-text"
          />
          <input
            type="number"
            name="item-price"
            placeholder="Item price"
            defaultValue=""
            maxLength={50}
            className="w-[calc(100%-var(--spacing)*20)] text-center text-dark-text"
          />
          <input
            type="button"
            value="Add Item"
            className="bg-button hover:bg-button-hover hover:cursor-pointer text-text w-25 h-8 rounded-sm"
            onClick={() => {
              props.addItem();
            }}
          />
        </form>
      </div>
    </div>
  );
}
