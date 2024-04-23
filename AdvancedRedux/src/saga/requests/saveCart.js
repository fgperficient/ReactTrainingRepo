import axios from "axios";

export default orders => axios.post("http://localhost:3000/orders", orders);
