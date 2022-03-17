const Layer = ({ src, alt }) => {
  return (
    <div className="absolute">
      <img src={src} alt={alt} />
    </div>
  );
};

export default Layer;
