import { FaStar } from "react-icons/fa";

function CardItem(props) {
  let addToCardHandler = (e, props) => {
    e.preventDefault();
    props.onClick(props);
  };

  return (
    <div className="col-lg-4 col-xl-3 col-md-6">
      <div className="food-item">
        <img src={props.src} alt={props.alt} />
        <div className="info">
          <h4>{props.title}</h4>
          <div className="price-area">
            <div className="ratting">
              {new Array(5).fill(null).map((item, index) => {
                if (props.ratting > index) {
                  return <FaStar className="active" key={index} />;
                } else {
                  return <FaStar key={index} />;
                }
              })}
            </div>
            <div className="price">
              <span>${props.price.toFixed(2)}</span>
            </div>
          </div>
        </div>
        <div className="btn-area">
          <a
            data-id="01"
            className={`add-to-cart-btn ${props.active ? "added" : ""}`}
            onClick={(e) => {
              addToCardHandler(e, props);
            }}
            href="#"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
