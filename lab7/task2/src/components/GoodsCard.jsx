export default function GoodsCard(props) {
  console.log(props.item);
  return (
    <div className="GoodsCard">
      <p className="good_name">{props.item.name}</p>
      <img className="good_img" src={props.item.img} alt="goods image" />
      <p className="good_price">{`${props.item.price}$`}</p>
    </div>
  );
}
