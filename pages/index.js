
import CartList from "../src/components/CartDesigns/CartList";
import { apiAction } from "../src/store/reducer";
import { useDispatch, useSelector } from "react-redux";

export default function Home(props) {
  //console.log(props.newData);

  const dispatch = useDispatch();

  const getData = useSelector((state) => state.allReducer.api);

  console.log("getData -->>", getData);

  // useEffect(() => {
  //   dispatch(apiAction());
  // }, []);

  if (getData.length === 0) {
    dispatch(apiAction());
  }

  return (
    <div>
      <CartList data={getData} />
    </div>
  );
}

// export const getServerSideProps = wrapper.getServerSideProps( async ({store, req}) =>{
//   store.dispatch({type: FETCH_BLOG_LIST});
//   store.dispatch(END);
//   await store.sagaTask.toPromise();

//   const blog = store.getState();
//   const blogs = blog.blogReducer.blog;

//   return { props: {blogs}, };
// });

// export async function getServerSideProps() {
//   const getJson = await axios("https://jsonplaceholder.typicode.com/photos");

//   const resData = getJson.data;

//   return {
//     props: {
//       newData: resData,
//     },
//   };
// }

// export const getServerSideProps = wrapper.getServerSideProps(
//   async ({ store, req }) => {
//     store.dispatch({ type: NEW_API });

//     const getData = store.getState();

//     console.log("getDatas ====>>>>>", await getData.apiD.api);

//     return {
//       props: {
//         newData: "kapil shukla",
//       },
//     };
//   }
// );
