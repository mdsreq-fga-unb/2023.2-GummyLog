import { Box, Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import SearchIcon from "./icons/SearchIcon";
import React from 'react';

const Filters = ({ columnFilters, setColumnFilters }) => {
    const taskName = columnFilters.find(
        f => f.id === 'id'
    )?.value || '';

    const onFilterChange = (id, value) => setColumnFilters(
        prev => prev.filter(f => f.id !== id).concat({
            id, value
        })
    )

  return (
    <Box mb={6}>
      <InputGroup size='sm' maxW='12rem'>
        <InputLeftElement pointerEvents='none'>
          <Icon as={SearchIcon} />
        </InputLeftElement>
        <Input
          type="text"
          variant="filled"
          placeholder="Search id"
          borderRadius={5} 
          value={taskName}
          onChange={
            (e) => onFilterChange('id', e.target.value)
          }
        />
      </InputGroup>
    </Box>
  );
}

export default Filters;
