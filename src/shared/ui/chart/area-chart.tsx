'use client';

import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '../chart';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../card';
import { TChartsColors } from '../../model/charts-colors.type';

export const description = 'A simple area chart';

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

export function CustomAreaChart<T extends string, R extends string>({
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
          <AreaChart
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
            <ChartTooltip content={<ChartTooltipContent indicator='line' />} cursor={false} />
            <Area
              dataKey={y}
              fill={`var(--color-${y})`}
              fillOpacity={0.4}
              stroke={`var(--color-${y})`}
              type='natural'
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
