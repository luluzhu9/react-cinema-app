import React, { useState } from 'react';

import './MainContent.scss';
import Slideshow from '../slide-show/Slideshow';
import Paginate from '../paginate/Paginate';
import Grid from '../grid/Grid';

const MainContent = () => {
  const images = [
    {
      url: 'https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?cs=srgb&dl=pexels-pixabay-33129.jpg&fm=jpg',
      rating: 7.5
    },
    {
      url: 'https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?cs=srgb&dl=pexels-pixabay-33129.jpg&fm=jpg',
      rating: 8.5
    },
    {
      url: 'https://cdn.pixabay.com/photo/2018/01/03/01/17/film-3057394_640.jpg',
      rating: 7.8
    },
    {
      url: 'https://cdn.pixabay.com/photo/2018/01/03/01/17/film-3057394_640.jpg',
      rating: 9.7
    },
    {
      url: 'https://cdn.pixabay.com/photo/2018/01/03/01/17/film-3057394_640.jpg',
      rating: 6.5
    },
    {
      url: 'https://image.cnbcfm.com/api/v1/image/107112713-1662049046824-gettyimages-1146819830-ai7i1036copy.jpeg?v=1662049153',
      rating: 8.5
    }
  ];
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (type) => {
    if (type === 'prev' && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="main-content">
      <Slideshow images={images} auto={true} showArrows={true} />
      <div className="grid-movie-title">
        <div className="movieType">Now Playing</div>
        <div className="paginate">
          <Paginate currentPage={currentPage} totalPages={10} paginate={paginate} />
        </div>
      </div>
      <Grid images={images} />
    </div>
  );
};

export default MainContent;
