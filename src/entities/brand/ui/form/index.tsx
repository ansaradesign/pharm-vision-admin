import { FormEvent, forwardRef, useState } from 'react';
import { Input } from '@nextui-org/input';
import { Autocomplete, AutocompleteItem } from '@nextui-org/react';

import { IBrand } from '../../model';

import { LabelLayout } from '@/src/shared/ui/layouts/label-layout';
import { FileLoaderList } from '@/src/features/file-loader';

interface Props extends Partial<IBrand> {
  promotions?: {
    key: string;
    title: string;
  }[];
  formSubmit: (brand: Partial<IBrand>, logo?: File[]) => void;
}

export const BrandForm = forwardRef<HTMLFormElement | null, Props>(
  (
    {
      promotions,
      description: initialDescription,
      name: initialName,
      logo: initialLogo,
      formSubmit,
    },
    ref,
  ) => {
    const [name, setName] = useState(initialName);
    const [description, setDescription] = useState(initialDescription);
    const [promotionId, setPromotionId] = useState('');

    const [logoUrl, setLogoUrl] = useState(initialLogo ? [initialLogo] : undefined);
    const [logo, setLogo] = useState<File[]>([]);

    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      formSubmit({ name, description, promotionId, logo: initialLogo }, logo);
    };

    return (
      <form ref={ref} className='flex flex-col gap-2' onSubmit={handleSubmit}>
        <LabelLayout title='Название'>
          <Input placeholder='Нурофен' value={name} onChange={(e) => setName(e.target.value)} />
        </LabelLayout>
        <LabelLayout title='Описание'>
          <Input
            placeholder='Средство от головной боли'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </LabelLayout>
        {promotions ? (
          <LabelLayout title='Компания'>
            <Autocomplete onSelectionChange={(key) => setPromotionId(key as string)}>
              {promotions.map(({ key, title }) => (
                <AutocompleteItem key={key}>{title}</AutocompleteItem>
              ))}
            </Autocomplete>
          </LabelLayout>
        ) : null}

        <LabelLayout title='Логотип'>
          <FileLoaderList
            isSingle
            fileList={logo}
            imageLinks={logoUrl}
            setFileList={setLogo}
            setImageLinks={setLogoUrl}
          />
        </LabelLayout>
        <button className='hidden' type='submit' />
      </form>
    );
  },
);
