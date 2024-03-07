import { axiosClassic } from "@/api/interceptors"
import { ICompany } from "../model/company.model"

class CompanyAPI {
    private BASE_URL = '/company'

    async all() {
        const response = await axiosClassic.get<ICompany[]>(
			`${this.BASE_URL}/all/`
		)
		return response.data
    }

}

export const companyAPI = new CompanyAPI()
