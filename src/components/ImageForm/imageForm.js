import { Component } from 'react';
import SearchBar from 'components/Searchbar';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Modal from 'components/Modal';
import Loader from 'components/Loader/';

class ImageForm extends Component {
  state = {
    searchQuery: '',
    page: 1,
    images: [],
    loading: false,
    showModal: false,
    selectedImage: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;

    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      this.fetchImages();
    }
  }

  toggleModal = (image = null) => {
    this.setState(state => ({
      showModal: !state.showModal,
      selectedImage: image,
    }));
  };

  handleFormSubmit = query => {
    this.setState({ searchQuery: query, page: 1, images: [] });
  };

  fetchImages = async () => {
    const { searchQuery, page } = this.state;
    const API_KEY = '34731072-348d9a1558c6b29bcd98e02ff';
    this.setState({ loading: true });
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&page=${page}&per_page=12`
      );
      this.setState(prevState => ({
        images: [...prevState.images, ...response.data.hits],
        loading: false,
      }));
    } catch (error) {
      console.log(error);
      this.setState({ loading: false });
    }
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, showModal, selectedImage } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.handleFormSubmit} />
        {this.state.loading && <Loader />}
        <ImageGallery images={images} onImageClick={this.toggleModal} />
        {images.length > 0 && <Button onClick={this.loadMore} />}
        <ToastContainer autoClose={3000} />
        {showModal && (
          <Modal onClose={this.toggleModal} image={selectedImage} />
        )}
      </div>
    );
  }
}


export default ImageForm;
