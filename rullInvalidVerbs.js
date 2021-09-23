import { excludeVerbs } from './constants.js'

// проверка на глагол меньше 4 - х букв
export const invalidLengthVerbs = (verb) => {
   return verb.length < 4
}

// проверка на разноспрягаемый глагол
export const invalidExcludeVerbs = (verb) => {
   return excludeVerbs.some((item) => verb === item)
}

