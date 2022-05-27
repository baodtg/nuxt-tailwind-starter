import type { FetchOptions } from "ohmyfetch"

export type Fetch<ResponseType = unknown> = (url: string, options: FetchOptions) => Promise<ResponseType>

export const useRepositories = () => {
   const headers = useState<HeadersInit>("header", () => ({}))

   const fetch: Fetch = (url: string, options: FetchOptions) => {
      return $fetch(url, {
         ...options,
         headers: headers.value
      })
   }

   const setHeader = (key: string, value: string) => {
      headers.value = {
         ...headers.value,
         [key]: value
      }
   }

   return {
      fetch,
      setHeader,
      userRepository: useUserRepository(fetch)
   }
}