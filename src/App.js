import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import "./css/CSS_flashitems.css"
import "./css/CSS_mainnav-bar.css"
import "./css/Responsive/CSS_responsive.css"
import { useState, useEffect } from 'react';
import decode from 'jwt-decode';
import HeaderBanners from './components/HeaderBanners';
import MainNavBar from './components/Navbar/MainNavBar';
import CategoryBar from './components/Navbar/CategoryBar';
import BodyHeader from './components/BodyContent/BodyHeader';
import BodySales from './components/BodyContent/BodySales';
import BodyCategories from './components/BodyContent/BodyCategories';
import Footer from "./components/Footer/Footer.js"
import Recipes from './components/BodyContent/Recipes';

function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [info, setInfo] = useState()

  const decodeToken = () => {

    if (user !== null) {
      // setInfo(decode(user))
      // console.log(decode(user.token))

    }
  }

  useEffect(() => {
    if (localStorage.getItem("user") !== "" || localStorage.getItem("user") !== undefined) {
      decodeToken()

    }
  }, [])

  return (
    <div className="App">

      <div className="mainnav-bar">
        <MainNavBar info={info} ></MainNavBar>
      </div>
      {/* <CategoryBar></CategoryBar> */}

      <div className="header-body-container">
        <BodyHeader></BodyHeader>
      </div>

      <div>
        <BodyCategories></BodyCategories>
      </div>

      <div>
        <BodySales></BodySales>
      </div>

      <div>
        <Recipes></Recipes>
      </div>

      <div>
        <Footer></Footer>
      </div>

    </div>
  );
}

export default App;
