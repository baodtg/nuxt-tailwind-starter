import type { FetchOptions } from "ohmyfetch"

export const useHttp = () => {
   const headers = useState<HeadersInit>("header", () => ({}))

   const fetch = (url: string, options?: FetchOptions) => {
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
   }
}