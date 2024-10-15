import { BrandsStatistics } from '../ui/charts/variants/brands-statistics';
import { OffersStatistics } from '../ui/charts/variants/offers-statistics';

export const StatisticsVariants = {
  brands: {
    title: 'Статистика по брендам',
    description: 'Выберите бренды и промежуток для просмотра статистики',
    selectPlaceholder: 'Выберите бренды',
    chartComponent: BrandsStatistics,
  },
  offers: {
    title: 'Статистика по спецпредложениям',
    description: 'Выберите спецпредложения и промежуток для просмотра статистики',
    selectPlaceholder: 'Выберите спецпредложения',
    chartComponent: OffersStatistics,
  },
};
