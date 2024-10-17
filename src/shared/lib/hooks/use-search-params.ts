import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const useUpdateSearchParams = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [params, setParams] = useState<URLSearchParams>();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setParams(new URLSearchParams(window.location.search));
    }
  }, []);

  const update = (param: string, value: string) => {
    if (params) {
      const newParams = new URLSearchParams(params.toString());

      if (value) {
        newParams.set(param, value);
      } else {
        newParams.delete(param);
      }
      const newUrl = `${pathname}?${newParams.toString()}`;

      router.replace(newUrl, { scroll: false });
      setParams(newParams);
    }
  };

  return update;
};
