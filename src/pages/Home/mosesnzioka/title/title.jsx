import "./title.css";

function Title({ maintitle }) {
  return (
    <div className="title">
      <h3 className="main__title">{maintitle}</h3>
    </div>
  );
}
export default Title;
