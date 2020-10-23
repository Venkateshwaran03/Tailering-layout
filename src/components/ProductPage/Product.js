import React from "react";
import "./Product.css";

class Product extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        
        <div className="weaverz-ai-grid lg:weaverz-ai-grid-cols-2  md:weaverz-ai-grid-cols-2 sm:weaverz-ai-grid-cols-1">
          <div className=" md:weaverz-ai-py-32 md:weaverz-ai-mt-8 weaverz-ai-p-4 md:weaverz-ai-p-0">
            <h6 className="weaverz-ai-font-bold weaverz-ai-text-center">
              {this.props.heading}
            </h6>
            <p className="weaverz-ai-text-center weaverz-ai-text-sm weaverz-ai-align-middle weaverz-ai-text-gray-600">
              {this.props.content}
            </p>
            <div id="weaverz-ai-button">
              <button class=" weaverz-ai-bg-red-500 hover:weaverz-ai-bg-red-700 weaverz-ai-text-black weaverz-ai-font-bold weaverz-ai-py-2 weaverz-ai-px-4 weaverz-ai-rounded">
                Get Yours Now!
              </button>
            </div>
          </div>
          <div
            className={`weaverz-ai-order-first sm:weaverz-ai-order-first md:weaverz-ai-order-${this.props.imgOrder}`}
          >
            <div ClassName="">
              <img
                src={this.props.imgSrc}
                alt="photo"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Product;
