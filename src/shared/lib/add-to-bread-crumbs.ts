interface ICrumb {
  label: string;
  href: string;
}

export const addToBreadCrumbs = (
  breadCrumbs: ICrumb[],
  label: string,
  href: string
) => {
  const newBreadCrumbs = structuredClone(breadCrumbs);

  newBreadCrumbs.push({
    label,
    href: newBreadCrumbs.at(-1)?.href + "/" + href,
  });

  return newBreadCrumbs;
};
