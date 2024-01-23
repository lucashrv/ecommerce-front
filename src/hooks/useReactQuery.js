import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../utils/axiosInstance";

export default function useApi() {
    const queryClient = useQueryClient()

    const oneMinute = 1 * 60 * 1000
    const twelveHours = 1000 * 60 * 60 * 12

    const requests = {
        query: (url, key) => useQuery({
            queryFn: async () => {
                const response = await axiosInstance.get(url)
                return response.data
            },
            queryKey: [key],
            retry: false,
            refetchInterval: oneMinute,
            staleTime: oneMinute,
            gcTime: twelveHours
        }),
        mutatePost: (url, key) => useMutation({
            mutationFn: async (data) => {
                const mutation = await axiosInstance.post(url, data)
                return mutation.data
            },
            onSuccess: () => {
                queryClient.invalidateQueries(key)
            }
        }),
        mutateDelete: (key) => useMutation({
            mutationFn: async (url) => {
                const mutation = await axiosInstance.delete(url)
                return mutation
            },
            onSuccess: (data) => {
                queryClient.invalidateQueries(key)
                console.log(data);
            },
            onError: (error) => {
                console.log(error);
            }
        })
    }

    return requests
}

// // Get
// export const useApiData = (url, key) => {

//     const query = useQuery({
//         queryFn: async () => {
//             const response = await axiosInstance.get(url)
//             return response.data
//         },
//         queryKey: [ key ],
//         retry: false,
//         refetchInterval: 5 * 60 * 1000
//     })

//     return query
// }

// // Post
// export const useApiMutate = (url, key) => {
//     const queryClient = useQueryClient()

//     const mutate = useMutation({
//         mutationFn: async (data) => {
//             const mutation = await axiosInstance.post(url, data)
//             return mutation.data
//         },
//         onSuccess: () => {
//             queryClient.invalidateQueries(key)
//         }
//     })

//     return mutate
// }
