'use client';

import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../card';
import { TChartsColors } from '../../model/charts-colors.type';

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '.';

interface Props<T extends string, R extends string> {
  title: string;
  description: string;
  label?: string;

  x: T;
  y: R;
  data: Record<T | R, string | number>[];
  formatX?: (value: string | number) => string | number;
  color?: TChartsColors;
}

export function CustomBarChart<T extends string, R extends string>({
  title,
  description,
  label,
  x,
  y,
  data,
  formatX,
  color = 'blue',
}: Props<T, R>) {
  const chartConfig = {
    value: {
      label: label || title,
      color: `hsl(var(--chart-${color}))`,
    },
  } satisfies ChartConfig;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className='h-[var(--chart-h-large)]'>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={data}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              axisLine={false}
              dataKey={x}
              minTickGap={20}
              tickFormatter={(value) => {
                if (formatX) {
                  return formatX(value);
                }

                return value;
              }}
              tickLine={false}
              tickMargin={8}
            />
            <Bar dataKey={y} fill={`var(--color-${y})`} radius={[2, 2, 2, 2]} />
            <ChartTooltip content={<ChartTooltipContent />} cursor={false} defaultIndex={1} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
