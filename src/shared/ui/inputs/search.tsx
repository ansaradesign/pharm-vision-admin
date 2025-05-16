'use client';

import { Input } from '@nextui-org/input';
import { useState } from 'react';
import { useDebounce } from 'react-use';
import { CiSearch } from 'react-icons/ci';

import { useUpdateSearchParams } from '../../lib/hooks/use-search-params';

interface Props {
  isGlobal?: boolean;
}

export const SearchInput = ({ isGlobal }: Props) => {
  const update = useUpdateSearchParams();
  const [search, setSearch] = useState('');
  const [, cancel] = useDebounce(
    () => {
      update(isGlobal ? 'globalSearch' : 'search', search);
    },
    1500,
    [search],
  );

  return (
    <Input
      className='w-full'
      classNames={{ input: 'font-medium' }}
      placeholder='Поиск...'
      startContent={<CiSearch className='opacity-50' size={20} />}
      onChange={(e) => {
        cancel();
        setSearch(e.target.value);
      }}
    />
  );
};
