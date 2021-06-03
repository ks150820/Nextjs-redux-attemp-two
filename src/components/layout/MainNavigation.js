import classes from "../../../styles/MainNavigation.module.css";
import Link from "next/link";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { useSelector } from "react-redux";

function MainNavigation(props) {
  const getData = useSelector((state) => state.allReducer.cartNumber);

  //console.log("getData --->>", getData);

  return (
    <header className={classes.header}>
      <Link href="/">
        <div className={classes.logo}>Home</div>
      </Link>
      <nav className={classes.navbar}>
        <Link href="/cart">
          <Badge badgeContent={getData.length} color="primary">
            <ShoppingCartIcon style={{ fontSize: 25, color: "#fff" }} />
          </Badge>
        </Link>
        {/* <ul>
          <li>
            <Link href="/cartproduct">
              <AddShoppingCartIcon style={{ fontSize: 40, color: "#fff" }} />
            </Link>
          </li>
        </ul> */}
      </nav>
    </header>
  );
}

export default MainNavigation;
