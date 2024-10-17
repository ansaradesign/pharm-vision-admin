import { BreadCrumbsOptions } from '../../bread-crumbs';

type TPossiblePathnames = keyof typeof BreadCrumbsOptions;
type TPossibleTitles = (typeof BreadCrumbsOptions)[TPossiblePathnames];

export interface IGlobalSearchLink {
  href: TPossiblePathnames;
  title: TPossibleTitles;
}
