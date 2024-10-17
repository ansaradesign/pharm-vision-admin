'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

function Products() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const urlArr = pathname.split('/');

    router.replace(urlArr.slice(0, -1).join('/'));
  }, []);

  return null;
}

export default Products;
