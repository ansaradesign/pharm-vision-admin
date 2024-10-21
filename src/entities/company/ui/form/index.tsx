import { Input } from '@nextui-org/input';
import { useState } from 'react';

import { ICompany } from '../../model';

import { FileLoaderList } from '@/src/features/file-loader';
import { LabelLayout } from '@/src/shared/ui/layouts/label-layout';

export const CompanyForm = ({
  name: initialName = '',
  promotionId: initialPromotionId,
  logo: initialLogo,
  banner: initialBanner,
  favicon: initialFavicon,
}: Partial<ICompany>) => {
  const [promotionId, setPromotionId] = useState(initialPromotionId);
  const [name, setName] = useState(initialName);
  const [banner, setBanner] = useState<File[]>([]);
  const [bannerUrl, setBannerUrl] = useState(initialBanner ? [initialBanner] : undefined);
  const [logoUrl, setlogoUrl] = useState(initialLogo ? [initialLogo] : undefined);
  const [faviconUrl, setFaviconUrl] = useState(initialFavicon ? [initialFavicon] : undefined);
  const [logo, setLogo] = useState<File[]>([]);
  const [favicon, setFavicon] = useState<File[]>([]);

  return (
    <form className='flex flex-col gap-2'>
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
          setImageLinks={setlogoUrl}
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
    </form>
  );
};
