import React from 'react';

import './MainContent.scss';
import Slideshow from '../slide-show/Slideshow';

const MainContent = () => {
  const images = [
    {
      url: 'https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?cs=srgb&dl=pexels-pixabay-33129.jpg&fm=jpg'
    },
    {
      url: 'https://cdn.pixabay.com/photo/2018/01/03/01/17/film-3057394_640.jpg'
    },
    {
      url: 'https://image.cnbcfm.com/api/v1/image/107112713-1662049046824-gettyimages-1146819830-ai7i1036copy.jpeg?v=1662049153'
    }
  ];

  return (
    <div className="main-content">
      <Slideshow images={images} auto={true} showArrows={true} />
      <div className="grid-movie-title">
        <div className="movieType">Now Playing</div>
        <div className="paginate">Paginate</div>
      </div>
      {/* display grid component */}
    </div>
  );
};

export default MainContent;