'use client';

import { Pie, PieChart } from 'recharts';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '../chart';
import { ChartColorsIndexes } from '../../config/chart-colors-indexes';

export const description = 'A simple pie chart';

interface Props<T extends string, R extends string> {
  title: string;
  description: string;
  label: T;
  value: R;
  data: Record<T | R, string | number>[];
  otherValue: number;
  footerTitle?: string;
  footerDescription?: string;
}

interface ChartConfig {
  [key: string]: { label: string; color: string };
}

export function CustomPieChart<T extends string, R extends string>({
  title,
  description,
  label,
  value,
  data,
  footerDescription,
  footerTitle,
  otherValue,
}: Props<T, R>) {
  const chartConfig: ChartConfig = {
    other: {
      label: 'other',
      color: ChartColorsIndexes[ChartColorsIndexes.length - 1],
    },
  } satisfies ChartConfig;

  const chartData = [];

  data.slice(0, 5).forEach((item, i) => {
    const name = item[label].toString();
    const color = ChartColorsIndexes[i];

    chartConfig[name] = { label: name, color };
    chartData.push({
      [label]: name,
      [value]: item[value],
      fill: `var(--color-${name})`,
    });
  });

  chartData.push({
    [label]: 'other',
    [value]: otherValue,
    fill: `var(--color-other)`,
  });

  return (
    <Card className='flex flex-col !w-fit'>
      <CardHeader className='items-center'>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent
        className={`flex-1 pb-0  ${footerTitle ? 'h-[var(--chart-h)]' : 'h-[var(--chart-h-large)]'} py-0`}
      >
        <ChartContainer className='mx-auto aspect-square' config={chartConfig}>
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} cursor={false} />
            <Pie data={chartData} dataKey={value} nameKey={label} />
          </PieChart>
        </ChartContainer>
      </CardContent>
      {footerTitle ? (
        <CardFooter className='flex-col gap-2 text-sm text-center'>
          <div className='flex items-center gap-2 font-medium leading-none'>{footerTitle}</div>
          <div className='leading-none opacity-50'>{footerDescription}</div>
        </CardFooter>
      ) : null}
    </Card>
  );
}
