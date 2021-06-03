import CartItem from "./CartItem";
import classes from "../../../styles/CartList.module.css";

function CartList(props) {
  return (
    <div className={classes.itemContainer}>
      {props.data.map((item) => (
        <div key={item.id}>
          <CartItem title={item.title} image={item.thumbnailUrl} />
        </div>
      ))}
    </div>
  );
}

export default CartList;
