import { HeaderSearchbar, SearchForm, Button, Input } from './Searchbar.styled';

import { Formik } from 'formik';
import { GrSearch } from 'react-icons/gr';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = (values, action) => {
    onSubmit(values);
    action.resetForm();
  };
  return (
    <HeaderSearchbar>
      <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
        <SearchForm>
          <Button type="submit">
            <GrSearch />
          </Button>
          <Input
            name="search"
            type="text"
            placeholder="Search images and photos"
          ></Input>
        </SearchForm>
      </Formik>
    </HeaderSearchbar>
  );
};
