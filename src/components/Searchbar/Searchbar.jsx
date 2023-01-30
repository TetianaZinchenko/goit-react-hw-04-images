import { useState } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { MdSearch } from 'react-icons/md';

import {
  SearchbarStyles,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

export default function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (searchQuery === '') {
      toast.error('Please try again!', {
        duration: 1000,
      });

      return;
    }
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  const handleInputChange = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase().trim());
  };

  return (
    <SearchbarStyles>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit" aria-label="Search Button">
          <MdSearch size={26} />
        </SearchFormButton>

        <SearchFormInput
          onChange={handleInputChange}
          value={searchQuery}
          type="text"
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarStyles>
  );
}
