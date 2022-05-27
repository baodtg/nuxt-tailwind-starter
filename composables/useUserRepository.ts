export const useUserRepository = () => {
   const { fetch } = useHttp();

   const getUser = (username: string) => {
      return fetch(`https://api.github.com/users/${username}`)
   }

   return {
      getUser
   }
}