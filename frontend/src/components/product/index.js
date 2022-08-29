import styles from "./index.module.css";
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";

export const Product = ({ data: { _id, name, type, price, cover } }) => {
  const handleDelete = async (id) =>{
     const deletedProduct = await fetch(`http://localhost:5000/api/products/${id}`, {method: "DELETE"})
     return deletedProduct
  }
  return (
    <div className={styles.productItem}>
      <div className={styles.productImage}>
        <img src={cover} />
      </div>
      <div className={styles.productInfo}>
        <span className={styles.productTitle}>
          {name} <br />
          <span className={styles.productType}>{type}</span>
        </span>

        <div className={styles.productBucketAdd}>
          <span className={styles.productPrice}>{price}</span>
          <button className="primary">
            <AiOutlineEdit  size={20}/>
          </button>
          <button className="primary bg-danger" onClick={()=>handleDelete(_id)}>
            <AiFillDelete  size={20}/>
          </button>
        </div>
      </div>
    </div>
  );
};
