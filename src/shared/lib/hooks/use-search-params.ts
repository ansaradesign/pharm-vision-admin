import { usePathname, useRouter } from "next/navigation";

export const useUpdateSearchParams = () => {
  const router = useRouter();
  const pathname = usePathname();

  const params = new URLSearchParams(window.location.search);

  const update = (param: string, value: string) => {
    if (value) {
      params.set(param, value);
    } else {
      params.delete(param);
    }
    const newUrl = `${pathname}?${params.toString()}`;

    router.replace(newUrl);
  };

  return update;
};
