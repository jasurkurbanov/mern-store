import { useEffect, useState } from "react";
import styles from "./style.module.css";
import { BsSearch, BsFillInfoCircleFill } from "react-icons/bs";

import { ImExit } from "react-icons/im";
import { Product } from "./components/product";
import productsJSON from "./data/products.json";
import { Link } from "react-router-dom";
import { CheckoutIcon, HomeIcon, LogoIcon } from "./assets/icons";

function Home() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const result = await fetch(
        `http://localhost:5000/api/products`,
      );
      const res = await result.json()
      setIsLoading(false);
      setData(res);
    };

    fetchData();
  }, []);


  const fetchSearchData = async () => {
    setIsLoading(true);
    const result = await fetch(
      `http://localhost:5000/api/products/search?name=${query}`,
    );
    const res = await result.json()
    setIsLoading(false);
    setData(res);
  };

  const renderProducts = () => {
    return(
    isLoading ? (
      <div>Loading ...</div>
    ) : data && data.length>1?
          data.map((data, idx) => (
              <Product data={data} key={idx} />
          )):
          <div>Query cannot be empty</div>
  )}
  return (
      <main>
          <header>
            <div className={styles.searchContainer}>
            <div className={styles.searchInput}>
              <input
                placeholder="Search products..."
                onChange={event => setQuery(event.target.value)}
              />
              <button className="primary" onClick={fetchSearchData}>
                <BsSearch />
              </button>
            </div>
            </div>

            <button className="primary">
              Add Product
            </button>
          </header>
          <div className={styles.productsContainer}>
              {renderProducts()}
          </div>
      </main>
  );
}

export default Home;
