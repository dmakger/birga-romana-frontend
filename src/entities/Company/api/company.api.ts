import { axiosClassic } from "@/api/interceptors"
import { ICompany } from "../model/company.model"
import { IStock } from "@/entities/Stock/model/stock.model"

class CompanyAPI {
    private BASE_URL = '/company'

    async all() {
      const response = await axiosClassic.get<ICompany[]>(
        `${this.BASE_URL}/all/`
      )
      return response.data
    }

    async stocks(companyIds: number[]) {
      const response = await axiosClassic.post<IStock[]>(
        `${this.BASE_URL}/stocks/`, {"companies": companyIds}
      )
      return response.data
    }

}

export const companyAPI = new CompanyAPI()
