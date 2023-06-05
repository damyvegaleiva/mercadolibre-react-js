const ItemDetailPics = ({ thumbnail, pictures }) => {
  return (
    <div>
      {/* {pictures.map((pic) => (
        <img src={pic.url} />
      ))} */}

      <div>
        <img src={thumbnail} alt="" />
      </div>
    </div>
  );
};

export default ItemDetailPics;
