"use client";

import { Pie, PieChart } from "recharts";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Button } from "@/components/ui/button";

export function Resoltquestion({ score, user, prev, form }) {
  const chartData = [
    { score: "correct", visitors: score.correct, fill: "var(--color-safari)" },
    { score: "wrong", visitors: score.wrong, fill: "var(--color-chrome)" },
  ];

  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    chrome: {
      label: "Chrome",
      color: "hsl(var(--chart-1))",
    },
    safari: {
      label: "Safari",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig;
  return (
    <Card className="flex flex-col">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={85}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 text-xl leading-none text-green-700">
          {score.correct}:Correct
        </div>
        <div className="leading-none text-xl text-orange-600">
          {score.wrong}:Incorrect
        </div>
        <div className="leading-none text-2xl text-blue-600">{score.total}</div>
      </CardFooter>
      <div>
        <Button
          onClick={() => {
            prev(0);
            user(true);
            form.reset();
          }}
        >
          Back
        </Button>
        <Button
          type="button"
          onClick={() => {
            prev(0);
            user(true);
          }}
        >
          Show data
        </Button>
      </div>
    </Card>
  );
}
