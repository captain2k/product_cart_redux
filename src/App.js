import Header from "./Components/Header"
import Footer from "./Components/Footer";
import ProductsContainer from "./containers/ProductsContainer";
import CartContainer from "./containers/CartContainer";
import MessageContainer from "./containers/MessageContainer";



function App() {
  return (
    <div >
      <Header />
      <main id="mainContainer">
        <div className="container">
          <ProductsContainer />
          <MessageContainer />
          <CartContainer />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
