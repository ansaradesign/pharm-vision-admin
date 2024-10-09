'use client';

import { Input } from '@nextui-org/input';
import { useState } from 'react';
import { useDebounce } from 'react-use';
import { MagnifyingGlass } from '@phosphor-icons/react';

import { useUpdateSearchParams } from '../../lib/hooks/use-search-params';

export const SearchInput = () => {
  const update = useUpdateSearchParams();
  const [search, setSearch] = useState('');
  const [, cancel] = useDebounce(
    () => {
      update('search', search);
    },
    1500,
    [search],
  );

  return (
    <Input
      className='w-full'
      placeholder='Поиск...'
      startContent={<MagnifyingGlass className='opacity-50' size={20} weight='bold' />}
      onChange={(e) => {
        cancel();
        setSearch(e.target.value);
      }}
    />
  );
};
