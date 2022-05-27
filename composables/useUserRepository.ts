import { Fetch } from "./useRepositories"

export const useUserRepository = (fetch: Fetch) => {

   const getUser = () => {
      return new Promise(resolve => {
         resolve({
            id: 1,
            displayName: "Bao Dang"
         })
      })
   }

   return {
      getUser
   }
}