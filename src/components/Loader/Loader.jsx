import GridLoader from 'react-spinners/GridLoader';

import PropTypes from 'prop-types';

import { Spinner } from './Loader.styled';

export default function Loader({ loading }) {
  return (
    <Spinner>
      <GridLoader
        color="#303f9f"
        aria-label="Loading Spinner"
        loading={loading}
        size={50}
      />
    </Spinner>
  );
}
Loader.propTypes = {
  loading: PropTypes.bool,
};
