import { endingOfAVerb } from './constants.js'

// создаю спряженный глагол
export const createVerb = (pronoun, conjugation, verb) => {
   // находим объект с нашим  местоимением
   let obj = endingOfAVerb.find(item => item.name === pronoun.toLowerCase())

   // у объекта находим наше спряжение
   let conjugationObj = Object.keys(obj).find(item => item === conjugation)

   // добавляем новое окончание
   const ending = obj[conjugationObj]
   if (!Array.isArray(ending)) {
      const newVerb = verb.slice(0, - 3) + ending
      return [newVerb]
   } else {
      const newVerb = verb.slice(0, - 3) + ending[0]
      const newVerb2 = verb.slice(0, - 3) + ending[1]
      return [newVerb, newVerb2]
   }
}
