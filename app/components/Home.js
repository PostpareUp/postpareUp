import React from 'react';

const Home = () => {
  return (
    <div className="carousel-wrapper">
      <span id="item-1" />
      <span id="item-2" />
      <span id="item-3" />

      <div className="carousel-item item-1">
        <a className="arrow arrow-prev" href="#item-3" />
        <a className="arrow arrow-next" href="#item-2" />
      </div>

      <div className="carousel-item item-2">
        <a className="arrow arrow-prev" href="#item-1" />
        <a className="arrow arrow-next" href="#item-3" />
      </div>

      <div className="carousel-item item-3">
        <a className="arrow arrow-prev" href="#item-2" />
        <a className="arrow arrow-next" href="#item-1" />
      </div>
    </div>
  )
}

export default Home;
