import classes from "./Counter.module.css";
import { counterActions } from "../store";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => {
    return state?.counter?.counter ?? 0;
  });

  const show = useSelector(state => {
    return state?.counter?.showCounter ?? true;
  });

  const isAuthenticated = useSelector(state => {
    return state.auth.isAuthenticated;
  });

  const toggleCounterHandler = () => {
    dispatch(counterActions.toogleCounter());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increment({ amount: 5 }));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <>
      {isAuthenticated && (
        <main className={classes.counter}>
          <h1>Redux Counter</h1>
          <div className={classes.value}>{show && counter}</div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              width: "100%",
              marginBottom: "40px"
            }}
          >
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={increaseHandler}>Increase</button>
            <button onClick={decrementHandler}>Decrement</button>
          </div>
          <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
      )}
    </>
  );
};
/*
class Counter extends Component {
  toggleCounterHandler = () => {};

  incrementHandler = () => {
    this.props.increment();
  };

  decrementHandler = () => {
    this.props.decrement();
  };

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler.bind(this)}>
          Toggle Counter
        </button>
      </main>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    counter: state?.counter ?? 0,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "increment" }),
    decrement: () => dispatch({ type: "decrement" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);*/
export default Counter;
