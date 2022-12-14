import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./Context/CartContext"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<CartProvider>
				<NavBar />
				<Routes>
					<Route path="/" element={<ItemListContainer />} />
					<Route
						path="/categoria/:categoriaId"
						element={<ItemListContainer />}
					/>
					<Route path="/cart" element={<Cart />} />
					<Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
				</Routes>
			</CartProvider>
		</BrowserRouter>
	);
}

export default App;
