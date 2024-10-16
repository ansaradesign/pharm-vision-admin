import { BreadCrumbsOptions } from '@/src/features/bread-crumbs';

export const getTitleFromBreadcrumbsByCategory = (category: string) => {
  const possiblePaths = Object.keys(BreadCrumbsOptions);
  let title = '';

  possiblePaths.forEach((path) => {
    const pathName = path.slice(1);

    if (pathName === category) {
      title = BreadCrumbsOptions[path as keyof typeof BreadCrumbsOptions];
    }
  });

  return title;
};
