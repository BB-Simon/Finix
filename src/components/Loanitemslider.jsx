import React, { Component } from "react";
import Slider from "react-slick";
import Loanitem from "./partials/Loanitem";
import Title from "./partials/Title";
import Loanitemcontent from "./partials/Loanitemcontent";
class Slick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <div>
        <Slider
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
          slidesToShow={6}
        >
          <div>
            <Loanitem
              img="/img/loan-1.svg"
              title={<Title title="Personal Loan" size="1.25rem" />}
            />
          </div>
          <div>
            <Loanitem
              img="/img/agriculture.svg"
              title={<Title title="Agriculture Loan" size="1.25rem" />}
            />
          </div>
          <div>
            <Loanitem
              img="/img/debt.svg"
              title={<Title title="Business Loan" size="1.25rem" />}
            />
          </div>
          <div>
            <Loanitem
              img="/img/scholarship.svg"
              title={<Title title="Education Loan" size="1.25rem" />}
            />
          </div>
          <div>
            <Loanitem
              img="/img/loan-2.svg"
              title={<Title title="House Loan" size="1.25rem" />}
            />
          </div>
          <div>
            <Loanitem
              img="/img/loan-3.svg"
              title={<Title title="Payday Loan" size="1.25rem" />}
            />
          </div>
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          slidesToShow={1}
          swipeToSlide={true}
          focusOnSelect={true}
          autoplay={true}
        >
          <div>
            <Loanitemcontent />
          </div>
          <div>
            <Loanitemcontent />
          </div>
          <div>
            <Loanitemcontent />
          </div>
          <div>
            <Loanitemcontent />
          </div>
          <div>
            <Loanitemcontent />
          </div>
          <div>
            <Loanitemcontent />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Slick;
