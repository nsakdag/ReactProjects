import "./App.css";
import data from "./components/data";
import ProductCard from "./components/ProductCard";
import Header from "./components/Header";

function App() {
  const cards = data.map((item) => {
    return <ProductCard {...item} />;
  });
  return (
    <div className="container">
      <Header />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;
