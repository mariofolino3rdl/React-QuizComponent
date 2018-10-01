import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion'
import QuizEnd from './QuizEnd'

let quizData = require('./quiz_data.json')

class Quiz extends Component
{

    render(){
        const isQuizEnd = quizData.quiz_questions.length === (this.state.quiz_position - 1)
        return (
            <div>
                (isQuizEnd ? 
                    <QuizEnd /> : 
                    <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} />
                )
            </div>
        )
    }

    constructor(props)
    {
        super(props)
        this.state = { quiz_position: 1 }
    }
}

export default Quiz