import { useQuery } from "react-query";

async function fetchJSON(api_key: string, reg_number_input: number) {
    // For Testing purposes ... + Change return data to return data.record in Testing.
    // const response = await fetch(`https://api.jsonbin.io/v3/qs/66cf0884acd3cb34a87ab1c1`, {
    const response = await fetch(`https://api.wathq.sa/v5/commercialregistration/fullinfo/${reg_number_input}`, {
        headers: {
            "accept": "application/json",
            "apiKey": api_key,
        }
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();    
    return data;
  }
  
export function useMyFetch(api_key: string, reg_number_input: number) {
    return useQuery({
        queryKey: ['regNum', reg_number_input],
        queryFn: () => fetchJSON(api_key, reg_number_input),
        enabled: false,
        staleTime: 60 * (24 * 60 * 1000), // 1 day 
        cacheTime: 1500 * (7 * 60 * 1000), // 1 week
      });
}