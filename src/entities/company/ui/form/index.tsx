'use client';
import { Input } from '@nextui-org/input';
import { FormEvent, forwardRef, useState } from 'react';

import { ICompany } from '../../model';

import { FileLoaderList } from '@/src/features/file-loader';
import { LabelLayout } from '@/src/shared/ui/layouts/label-layout';
import { Flex } from '@/src/shared/ui/primitives/flex';

interface Props extends Partial<ICompany> {
  formSubmit: (
    company: Partial<ICompany>,
    logo?: File[],
    banner?: File[],
    favicon?: File[],
  ) => void;
}

export const CompanyForm = forwardRef<HTMLFormElement | null, Props>(
  (
    {
      name: initialName = '',
      promotionId: initialPromotionId,
      logo: initialLogo,
      banner: initialBanner,
      favicon: initialFavicon,
      formSubmit,
    },
    ref,
  ) => {
    const [promotionId, setPromotionId] = useState(initialPromotionId);
    const [name, setName] = useState(initialName);
    const [banner, setBanner] = useState<File[]>([]);
    const [bannerUrl, setBannerUrl] = useState(initialBanner ? [initialBanner] : undefined);
    const [logoUrl, setLogoUrl] = useState(initialLogo ? [initialLogo] : undefined);
    const [faviconUrl, setFaviconUrl] = useState(initialFavicon ? [initialFavicon] : undefined);
    const [logo, setLogo] = useState<File[]>([]);
    const [favicon, setFavicon] = useState<File[]>([]);

    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      formSubmit(
        { name, promotionId, logo: initialLogo, banner: initialBanner, favicon: initialFavicon },
        logo,
        banner,
        favicon,
      );
    };

    return (
      <form ref={ref} className='flex flex-col gap-2' onSubmit={handleSubmit}>
        {initialPromotionId === undefined && (
          <LabelLayout title='Уникальный идентификатор'>
            <Input
              placeholder='r-pharm'
              value={promotionId}
              onChange={(e) => setPromotionId(e.target.value)}
            />
          </LabelLayout>
        )}
        <LabelLayout title='Название'>
          <Input placeholder='Р-ФАРМ' value={name} onChange={(e) => setName(e.target.value)} />
        </LabelLayout>
        <Flex col gap={3}>
          <LabelLayout title='Баннер'>
            <FileLoaderList
              isSingle
              fileList={banner}
              imageLinks={bannerUrl}
              setFileList={setBanner}
              setImageLinks={setBannerUrl}
            />
          </LabelLayout>
          <LabelLayout title='Логотип'>
            <FileLoaderList
              isSingle
              fileList={logo}
              imageLinks={logoUrl}
              setFileList={setLogo}
              setImageLinks={setLogoUrl}
            />
          </LabelLayout>
          <LabelLayout title='Фавикон'>
            <FileLoaderList
              isSingle
              fileList={favicon}
              imageLinks={faviconUrl}
              setFileList={setFavicon}
              setImageLinks={setFaviconUrl}
            />
          </LabelLayout>
        </Flex>

        <button className='hidden' type='submit' />
      </form>
    );
  },
);
