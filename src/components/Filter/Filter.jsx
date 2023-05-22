import PropTypes from 'prop-types';
import Input from './Filter.styled';

const Filter = ({ onChange, value }) => {
  return (
    <Input
      type='text'
      value={value}
      onChange={onChange}
      placeholder='Search contact'
    />
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Filter;
