export default function card(props) {
  return (
    <div className={props.focus ? "card-wrapper focus" : "card-wrapper"}>
      <div className="card">
        <div className={props.number > 2 ? "front typed" : "front"}>
          <div className="info">
            <div className="flag">
              {props.flag && <img src={`issuer/${props.flag}.svg`} alt="" />}
            </div>
            <div
              className={
                props.number === "**** **** **** ****"
                  ? "numbers"
                  : props.number.length < 19
                  ? "typing"
                  : "typed"
              }
            >
              <span>{props.number.slice(0, 4)}&nbsp;</span>
              <span>{props.number.slice(5, 9)}&nbsp;</span>
              <span>{props.number.slice(10, 14)}&nbsp;</span>
              <span>{props.number.slice(15, 19)}</span>
            </div>
            <div className="name">{props.name.slice(0, 17)}</div>
            <div className="expiration">
              {props.expiry.slice(0, 2)}/{props.expiry.slice(2, 4)}
            </div>
          </div>
        </div>
        <div className={props.code === "***" ? "back" : "back typed"}>
          <div className="cvv">{props.code.slice(0, 3)}</div>
        </div>
      </div>
    </div>
  );
}
