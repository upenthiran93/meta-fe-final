function SpecialCard({ title, description, image, Price}) {
  return (
    <div className="special-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
        <h3> {Price}</h3>
      <p>{description}</p>
        <h2> oder this item</h2>
        <button> oder noww</button>
    </div>
  );
}
export default SpecialCard;