import { invalidLengthVerbs, invalidExcludeVerbs } from './rullInvalidVerbs.js'
import { choiceOfConjugation } from './choiceOfConjugation.js'
import { createVerb } from './createVerb.js'

document.getElementById('button').addEventListener("click", () => {

   const inputVerb = document.getElementById('verb')
   const verb = inputVerb.value
   const inputPronoun = document.getElementById('pronoun')
   const pronoun = inputPronoun.value
   const resultOutput = document.getElementById('resultOutput')

   // проверка на глагол меньше 4-х букв
   const isInvalidLength = invalidLengthVerbs(verb)
   if (isInvalidLength) {
      resultOutput.textContent = 'Прошу ввести глагол полностью в неопределенной форме'
      return
   }

   // проверка на разноспрягаемый глагол
   const isInvalidExclude = invalidExcludeVerbs(verb)
   if (isInvalidExclude) {
      resultOutput.textContent = 'Прошу ввести не разноспрягаемый глагол'
      return
   }

   // получаю суффикс
   const suffixVerbs = verb.substr(-3).toLowerCase()

   // узнаю спряжение по суффиксу
   let conjugation = ''
   conjugation = choiceOfConjugation(suffixVerbs, verb, conjugation)

   // создаю спряженный глагол
   let result = createVerb(pronoun, conjugation, verb)

   // вывожу спряженный глагол
   resultOutput.textContent = result
})

