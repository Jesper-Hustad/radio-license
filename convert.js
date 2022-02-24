const fs = require("fs");

const examDirectory = "./previousExams/"

const fileToQuestions = (fileName) => fs.readFileSync(examDirectory + fileName).toString().split("Question text")

const toQuestionObject = (rawQuestion) => {
    const s = rawQuestion.split("\n")

    const i = s.indexOf('a.')
    const c = s[s.indexOf('Feedback') + 1].substring(23)

    const answers = [s[i+1],s[i+4],s[i+7],s[i+10]]
    const solution = answers.indexOf(c)

    return { "question" : s[1], "answers" : answers, "solution" : solution}
}


const exams = fs.readdirSync(examDirectory)
const questions = exams.map(f => fileToQuestions(f).map(toQuestionObject)).flat()

fs.writeFileSync("questions.json", JSON.stringify(questions));