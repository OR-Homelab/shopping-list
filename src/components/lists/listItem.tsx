interface ListItemProps {
  id?: number;
  item_name: string;
  item_amount: number;
  item_price: number;
  is_bought: boolean;
}

export default function ListItem(props: ListItemProps) {
  return (
    <div className="flex w-full bg-button justify-center">
      <p>{props.item_name}</p>
      <p>{props.item_amount}</p>
      <p>{props.item_price}</p>
      <p>{props.is_bought.toString()}</p>
    </div>
  );
}
