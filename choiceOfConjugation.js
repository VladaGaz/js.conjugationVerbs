import { includeVerbsFirst, includeVerbsSecond } from './constants.js'

// узнаю спряжение по суффиксу
export const choiceOfConjugation = (suffixVerbs, verb, conjugation) => {
   switch (suffixVerbs) {
      case 'еть':
      case 'ать':
         const isIncludeVerbsSecond = includeVerbsSecond.some((item) => verb === item)
         if (isIncludeVerbsSecond) {
            return conjugation = '2conjugation'
         }
         return conjugation = '1conjugation'
      case 'ить':
         const isIncludeVerbsFirst = includeVerbsFirst.some((item) => verb === item)
         if (isIncludeVerbsFirst) {
            return conjugation = '1conjugation'
         }
         return conjugation = '2conjugation'
      default:
         return conjugation = '1conjugation'
   }
}
