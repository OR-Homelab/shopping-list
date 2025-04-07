"use client";

import ListItem from "@/components/lists/listItem/listItem";
import AddItem from "@/components/lists/listItem/addItem";
interface ListProps {
  data: {
    id: number;
    item_name: string;
    item_amount: number;
    item_price: number;
    is_bought: boolean;
  }[];
  total_price: number;
  addItem: () => void;
  removeItem: () => void;
}

export default function List(props: ListProps) {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="w-full shadow border mt-0 max-w-md p-0 bg-white border-dark-text flex flex-col">
        <div className="space-y-10 p-8">
          <p className="text-2xl text-dark-text text-center">Indkøbsliste</p>
          <p className="text-center">Name Price Amount Bought</p>
          {props.data.map((item) => (
            <ListItem key={item.id} {...item} />
          ))}
        </div>
        <p className="text-center">Total {props.total_price} dkk</p>
        <AddItem addItem={props.addItem} />
      </div>
    </div>
  );
}
