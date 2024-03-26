import { axiosClassic } from "@/api/interceptors"
import { IStock } from "@/entities/Stock/model/stock.model"

class StockAPI {
    private BASE_URL = '/stock'

    async all(data: object) {
      const response = await axiosClassic.post<IStock[]>(
        `${this.BASE_URL}/all/`, data
      )
      return response.data
    }

}

export const stockAPI = new StockAPI()
