import { IStock } from '@/entities/Stock/model/stock.model'
import useAPI from '@/api/useApi'
import { stockAPI } from '../api/stock.api'


export function useStocksCompany(data: object) {
	return useAPI<IStock[]>(['companyList'], () => stockAPI.all(data))
}