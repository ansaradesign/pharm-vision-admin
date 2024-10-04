import { BreadCrumbsOptions } from "../config/bread-crumbs-options";

type RemoveSlash<T extends string> = T extends `/${infer U}` ? U : never;

export type TBreadCrumbsDynamic = RemoveSlash<keyof typeof BreadCrumbsOptions>;
