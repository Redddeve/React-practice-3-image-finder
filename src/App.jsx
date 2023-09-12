import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import Searchbar from 'components/Searchbar/Searchbar';
import React, { Component } from 'react';

export default class App extends Component {
  state = {
    query: '',
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(e.target);

    e.currentTarget.reset();
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery>
          <ImageGalleryItem />
        </ImageGallery>
        <Loader />
        <Modal />
      </div>
    );
  }
}
