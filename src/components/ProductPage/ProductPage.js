import React from "react";
import img1 from "../../assets/imgBody/img1.jpg";
import img2 from "../../assets/imgBody/img2.jpg";
import img3 from "../../assets/imgBody/img3.jpg";
import img4 from "../../assets/imgBody/img4.jpg";
import Product from "./Product";

class ProductPage extends React.Component {
  render() {
    return (
      <>

        <div className="md:weaverz-ai-container md:weaverz-ai-mx-auto">
          <p className="weaverz-ai-text-center weaverz-ai-mt-10">Good To Be Here</p>
          <h3 className="weaverz-ai-text-center">WOOL CROSS X</h3>
          <div className="weaverz-ai-grid weaverz-ai-gap-x-24 xlg:weaverz-ai-grid-cols-1 lg:weaverz-ai-grid-cols-1 md:weaverz-ai-grid-cols-1 sm:weaverz-ai-grid-cols-1 weaverz-ai-mt-4">

            <div ClassName="">
              <Product
                imgSrc={img1}
                heading="SOCKS ARE SO YESTERDAY!"
                content="We promise that once you slip your bare feet into the Wool Cross X - which is lined with natural materials - that you’ll never want to take them off."
                imgOrder="last"
              />
              <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr>
              <Product
                imgSrc={img2}
                heading="NO NEED TO PLUG YOUR NOSE"
                content="Merino wool naturally neutralizes unpleasant smells, and wicks all moisture far away from the foot. It’s much more effective at eliminating odors and dampness than any artificial material."
                imgOrder="first"
              />
              <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr>
              <Product
                imgSrc={img4}
                heading="STABILITY CONTROL"
                content="The special sole provides maximum stability and an ideal cushioning effect on all surfaces."
                imgOrder="last"
              />
              <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr>
              <Product
                imgSrc={img3}
                heading="MICRO-GRIP SOLE"
                content="The Wool Cross X sports a Micro-Grip sole, which makes it the perfect shoe for any terrain. No matter if you’re tackling snow, slush or rocky ground, the Wool Cross X has your back."
                imgOrder="first"
              />
              <hr className="sm:weaverz-ai-block md:weaverz-ai-hidden weaverz-ai-my-2"></hr>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductPage;
