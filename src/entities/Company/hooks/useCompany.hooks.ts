import { IStock } from '@/entities/Stock/model/stock.model'
import { companyAPI } from '../api/company.api'
import { ICompany } from '../model/company.model'
import useAPI from '@/api/useApi'


export function useCompanyAll() {
	return useAPI<ICompany[]>(['companyList'], () => companyAPI.all())
}


export function useCompanyStocks(companyIds: number[]) {
	return useAPI<IStock[]>(['stockList'], () => companyAPI.stocks(companyIds))
}