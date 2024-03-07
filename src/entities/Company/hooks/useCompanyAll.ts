import { SkipToken, useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { companyAPI } from '../api/company.api'
import { ICompany } from '../model/company.model'
import { AxiosResponse } from 'axios'





export function useCompanyAll() {
	return useAPI<ICompany[]>(['companyList'], () => companyAPI.all())
}

type QueryFunction<T> = () => Promise<T>;
function useAPI<T>(queryKey: string[], queryFn: QueryFunction<T>): { data: T | undefined, setData: React.Dispatch<React.SetStateAction<T | undefined>> } {
    const { data } = useQuery<T>({
        queryKey: queryKey,
        queryFn: queryFn
    });

    const [apiData, setApiData] = useState<T | undefined>(data);

    useEffect(() => {
        setApiData(data);
    }, [data]);

    return { data: apiData, setData: setApiData };
}


// export function useCompanyAll() {
// 	const { data } = useQuery({
// 		queryKey: ['companyList'],
// 		queryFn: () => companyAPI.all()
// 	})

// 	const [companyList, setCompanyList] = useState<ICompany[] | undefined>(data?.data)

// 	useEffect(() => {
// 		setCompanyList(data?.data)
// 	}, [data?.data])

// 	return { companyList, setCompanyList }
// }
