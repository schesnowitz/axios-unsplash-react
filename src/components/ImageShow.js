
function ImageShow({image}) {
  return (
  <div>
  <label>{ image.alt_description }</label>
    <img src={ image.urls.small } alt={ image.alt_description }/>
  </div>
  )
};

export default ImageShow; 