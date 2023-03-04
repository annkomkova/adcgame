import './index.css'

import { speed, stages, wrong } from './adcgame/model.js'

//функция рандома
function sample(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function showTexting(wrapper) {
  const element = document.createElement('div')
  element.innerText = '...'
  element.classList.add('texting')

  wrapper.appendChild(element)
}

function showWrong() {
  const parent = document.createElement('div')
  parent.classList.add('questionsWrapper')


  const wrongContent = sample(wrong)
  const element = document.createElement('div')
  element.classList.add('wrong')
  element.innerText = wrongContent

  parent.appendChild(element)
  document.body.appendChild(parent)
}

function removeTexting() {
  const texting = document.getElementsByClassName('texting')[0]
  texting.remove()
}

function showQuestions(stage) {
  const wrapper = document.createElement('div')
  wrapper.classList.add('questionsWrapper')

  const stageContent = sample(stages[stage])
  let timeout = speed

  if (stageContent.questions.length === 1) {
      const question = stageContent.questions[0]
      showQuestion(wrapper, question)

      setTimeout(() => {
        showAnswersOrNextStage(stageContent)
      }, 1000)
    } else {
      stageContent.questions.forEach((question, i) => {
        if (i == 0) {
          showQuestion(wrapper, question)
          showTexting(wrapper)
        } else {
          if (i + 1 == stageContent.questions.length) {
            setTimeout(() => {
              removeTexting()
              showQuestion(wrapper, question)
              showAnswersOrNextStage(stageContent)
            }, timeout)
          } else {
            setTimeout(() => {
              removeTexting()
              showQuestion(wrapper, question)
              showTexting(wrapper)
            }, timeout)

            timeout += speed
          }
        }
      })
    }

    document.body.appendChild(wrapper)
  }

  function showQuestion(wrapper, question) {
    const element = document.createElement('div')
    element.innerHTML = question
    element.classList.add('question')
    wrapper.appendChild(element)
  }

function showAnswersOrNextStage(stageContent) {
  if (stageContent.answers) {
      showAnswers(stageContent.answers)
  } else {
    showQuestions(stageContent.stage)
  }
}

function showAnswers(answers) {
  const wrapper = document.createElement('div')
  wrapper.classList.add('answersWrapper')

  answers.forEach((answer, i) => {
    const element = document.createElement('div')
    element.innerText = answer.text
    element.classList.add('answer')

    element.addEventListener('click', () => {
      if (answer.correct == 'false'){
        showWrong()
        document.body.style = 'background-color: #FF3951'
        setTimeout(() => {
          document.body.style = 'background-color: #79ff39'
        }, 1000);
        showQuestions(answer.stage)
      } else {
      showQuestions(answer.stage)
    }
    })

    wrapper.appendChild(element)
  })
  document.body.appendChild(wrapper)
}

document.addEventListener('DOMContentLoaded', () => {

  showQuestions('stage1')
})
