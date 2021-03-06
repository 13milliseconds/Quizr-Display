class ProductDisplay extends React.Component {
  
    render() {
      const { product, settings } = this.props

      const imageURL = this.props.index == 1
        ? product.image //secondaryImage
        : product.image
  
      return <div className="productBlock">
              <div className="productImage">
                <img src={imageURL} />
              </div>
              <div className="productText">
                <h3>{product.title}</h3>
                <div className="description" dangerouslySetInnerHTML={{ __html: this.props.description }} />
                <a className="btn" target="_blank" href={ settings.domain + '/products/' + product.handle}>Shop Now</a>
              </div>
            </div>
    }
  }
  
  export default ProductDisplay;