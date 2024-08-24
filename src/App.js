import Navbar from "./UI/Navbar/Navbar";
import Signin from "./UI/User/Signin"
import Footer from "./UI/User/Footer"

import Signup from "./UI/User/Signup";
import Index_Nav from "./UI/Index/Index_Nav";

import "./CSS/Navbar.css"
import "./CSS/Index_Page.css"
import Index_banner from "./UI/Index/Index_banner";

function App() {
  return (
    <>
       {/* <Navbar /> */}
       {/* <Signin /> */}
       {/* <Signup />
       <Footer/> */}

       <Index_Nav />
       <Index_banner/>
    </>
  );
}

export default App;
