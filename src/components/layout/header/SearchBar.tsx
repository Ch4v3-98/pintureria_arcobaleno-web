import { Form, InputGroup, Button } from 'react-bootstrap';
import { useState } from 'react';
import { Search } from 'react-bootstrap-icons';

function SearchBar({ ...props }) {
  const [search, setSearch] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const onSearch = (searchTerm: string) => {
    console.log(searchTerm);
  };

  return (
    <>
      <InputGroup {...props}>
        <Form.Control
          type="text"
          placeholder="¿Qué estás buscando?"
          className="search-bar"
          value={search}
          onChange={handleChange}
        />
        <Button
          onClick={() => onSearch(search)}
          className="bg-secondary rounded-0 rounded-end py-2"
        >
          <Search className="text-light" />
        </Button>
      </InputGroup>
    </>
  );
}

export default SearchBar;
