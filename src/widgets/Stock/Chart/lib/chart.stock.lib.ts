import { IStock } from "@/entities/Stock/model/stock.model";

export interface IChartPayload {
    name: string
    text?: string
    [key: string]: any
}



export const stocksToChart = (dataKey: string, data: IStock[]) => {
    return data.map(it => ({
        name: `${it.cost}`,
        [dataKey]: it.cost,
        text: `${it.cost}`
    }))
};