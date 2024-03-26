import { IStock } from '@/entities/Stock/model/stock.model';
import { EColors } from '@/shared/data/color.data';
import LineChartWrapper from '@/shared/ui/Chart/ui/Line/LineChartWrapper';
import React, {useState} from 'react';
import { IChartPayload, stocksToChart } from '../lib/chart.stock.lib';
interface TaskByQuarterProps {
    stocks: IStock[],
    // users?: number[],
    // levels?: number[]
}

const ChartStock = ({stocks}: TaskByQuarterProps) => {
    const dataKey = "Количество задач"
    const title = `Стоимость акций «${stocks[0].company.title}»`

    // STATE
    const [data, setData] = useState<IChartPayload[]>(stocksToChart(dataKey, stocks))

    return (
        <LineChartWrapper title={title} dataKey={dataKey} data={data} fill={EColors.Black}/>
    );
};

export default ChartStock;