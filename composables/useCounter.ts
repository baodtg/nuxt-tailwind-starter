import { useState } from '#app'

export const useCounter = () => {
   return useState("counter", () => 0)
}