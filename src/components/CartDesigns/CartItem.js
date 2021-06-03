import Card from "../ui/Card";
import classes from "../../../styles/CartItem.module.css";
import DetailsIcon from "@material-ui/icons/Details";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/reducer";

function CartItem(props) {
  const { title, image } = props;

  const disptach = useDispatch();

  const handleClick = (title, image) => {
    const detail = {
      title: title,
      image: image,
    };
    disptach(cartAction(detail));
  };

  return (
    <Card>
      <div className={classes.container}>
        <img src={image} alt={title} />
        <div className={classes.desc}>
          <h5>{title}</h5>
        </div>
        <div className={classes.buttonGroup}>
          <div
            className={classes.actions}
            onClick={() => handleClick(title, image)}
          >
            <ShoppingCartIcon
              style={{ fontSize: 35 }}
              className={classes.button}
            />
          </div>
          <div className={classes.actions}>
            <DetailsIcon style={{ fontSize: 30 }} className={classes.button} />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default CartItem;
