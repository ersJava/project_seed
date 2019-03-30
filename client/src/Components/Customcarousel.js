import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import CarouselItem from './Carousel/CarouselItem'; // 5

class CustomCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { // 2
      index: 0,
      direction: null,
    };
    this.handleSelect = this.handleSelect.bind(this); // 6
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  generateItems() { // 4
    const { items } = this.props;
    return items.map((item, index) => {
      const active = (index === item.id);
      return (<CarouselItem
        key={`CI${item.id}`}
        active={active}
        direction={this.state.direction}
        {...item} // 7
      />);
    });
  }

  render() {
    return (
      <Carousel
        activeIndex={this.state.index}
        direction={this.state.direction}
        onSelect={this.handleSelect}
      >
        {this.generateItems()}
      </Carousel>
    );
  }
}

export default CustomCarousel;