'use client';

import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from 'recharts';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../card';
import { TChartsColors } from '../../model/charts-colors.type';

import { ChartConfig, ChartContainer } from './';

interface Props {
  title: string;
  description: string;
  footerTitle?: string;
  footerDescription?: string;
  label: string;
  amount: number;
  fullAmount: number;
  color?: TChartsColors;
}

export function RadialChart({
  title,
  description,
  footerDescription,
  footerTitle,
  label,
  amount,
  fullAmount,
  color = 'blue',
}: Props) {
  const chartConfig = {
    amount: {
      label: 'amount',
      color: `hsl(var(--chart-${color}))`,
    },
  } satisfies ChartConfig;

  const chartData = [{ amount, fill: 'var(--color-amount)' }];

  const deg = (amount * 360) / fullAmount;

  return (
    <Card className='!w-fit'>
      <CardHeader className='items-center'>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent
        className={`flex-1 pb-0  ${footerTitle ? 'h-[var(--chart-h)]' : 'h-[var(--chart-h-large)]'} py-0`}
      >
        <ChartContainer className='mx-auto aspect-square' config={chartConfig}>
          <RadialBarChart data={chartData} endAngle={deg} innerRadius={70} outerRadius={130}>
            <PolarGrid
              className='first:fill-default last:fill-background'
              gridType='circle'
              polarRadius={[76, 64]}
              radialLines={false}
              stroke='none'
            />
            <RadialBar background dataKey='amount' />
            <PolarRadiusAxis axisLine={false} tick={false} tickLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        dominantBaseline='middle'
                        textAnchor='middle'
                        x={viewBox.cx}
                        y={viewBox.cy}
                      >
                        <tspan
                          className='fill-foreground text-4xl font-bold'
                          x={viewBox.cx}
                          y={viewBox.cy}
                        >
                          {amount.toLocaleString()}
                        </tspan>
                        <tspan
                          className='fill-foreground opacity-50'
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                        >
                          {label}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      {footerTitle ? (
        <CardFooter className='flex-col gap-2 text-sm'>
          <div className='flex items-center gap-2 font-medium leading-none'>{footerTitle}</div>
          <div className='leading-none opacity-50'>{footerDescription}</div>
        </CardFooter>
      ) : null}
    </Card>
  );
}
