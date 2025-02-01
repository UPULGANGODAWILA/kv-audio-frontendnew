import "./productCard.css";

export default function ProductCard(props) {
    console.log(props.Name)
    console.log(props.img)
  return (
    <div className="product-card">
      <img
        className="product-image"
        src={props.img}
        alt="JBL Audio Mini 3"
      />
      <div className="product-info">
        <h2 className="product-title">{props.Name}</h2>
        <p className="product-price">LKR {props.price}</p>
        <div className="product-rating">
          {props.rating} <span>(5)</span>
        </div>
        <p className="product-sold">{props.sold}| Western</p>
      </div>
    </div>
  );
}
