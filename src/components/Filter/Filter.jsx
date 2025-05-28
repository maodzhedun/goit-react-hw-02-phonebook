import { Filtered } from './Filter.styled';

const Filter = ({ filter, onChange }) => {
  return (
    <Filtered>
      Find contacts by name
      <input type="text" name="filter" value={filter} onChange={onChange} />
    </Filtered>
  );
};

export default Filter;
