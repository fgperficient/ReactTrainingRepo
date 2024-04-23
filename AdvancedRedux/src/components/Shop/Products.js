import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { useSelector } from "react-redux";

const Products = props => {
  const data = useSelector(state => {
    return state.cart.products;
  });

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {data?.map((item, index) => {
          return (
            <ProductItem
              key={index}
              id={item.id}
              title={item.name}
              price={item.price}
              description={item.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
