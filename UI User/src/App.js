// Import thư viện React
import React, { Component } from "react";
// Import css chung
import "./index.css";
// Import các Component đã tạo

import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import FilterProduct from "./pages/FilterProduct/FilterProduct";
import ItemProductFilter from "./pages/FilterProduct/ItemProductFilter";
// import WishList from "./pages/WishList/WishList";
import HistoryBill from "./pages/Personal/HistoryBill";
import Login from "./pages/Login/Login";
// import Register from "./pages/Register/Register";
import InfoPersonal from "./pages/Personal/InfoPersonal";


class App extends Component {
  render() {
    return (
      // <WishList/>
      <HistoryBill/>
    );
  }
}

export default App;
