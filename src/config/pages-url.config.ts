class COMPANY {
    private root = ''

    HOME = `${this.root}/`
    DETAIL = (id: number) => `${this.root}/company/${id}`
}

export const COMPANY_PAGES = new COMPANY()
