import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

export const useUpdateSearchParams = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [params, setParams] = useState<URLSearchParams>(
    () => new URLSearchParams(searchParams?.toString()),
  );

  useEffect(() => {
    setParams(new URLSearchParams(searchParams?.toString()));
  }, [searchParams]);

  const update = useCallback(
    (param: string, value: string) => {
      const newParams = new URLSearchParams(params?.toString());

      if (value) {
        newParams.set(param, value);
      } else {
        newParams.delete(param);
      }

      const newUrl = `${pathname}?${newParams.toString()}`;

      router.replace(newUrl, { scroll: false });
    },
    [params, pathname, router],
  );

  return update;
};
