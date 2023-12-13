import { Box, Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import SearchIcon from "../icons/SearchIcon";
import React from 'react';

const Filters = ({ columnFilters, setColumnFilters }) => {
    const taskName = columnFilters.find(
        f => f.id === 'SKU'
    )?.value || '';

    const onFilterChange = (id, value) => setColumnFilters(
        prev => prev.filter(f => f.id !== id).concat({
            id, value
        })
    )

  return (
    <Box mb={6}>
      <InputGroup size='sm' maxW='12rem' bg="#F8F8F8" borderRadius="10px">
        <InputLeftElement pointerEvents='none'>
          <Icon as={SearchIcon} />
        </InputLeftElement>
        <Input
          type="text"
          variant="filled"
          placeholder="Search SKU"
          borderRadius={5} 
          value={taskName}
          onChange={
            (e) => onFilterChange('SKU', e.target.value)
          }
          _placeholder={{
            color: '#808080',
          }}
        />
      </InputGroup>
    </Box>
  );
}

export default Filters;