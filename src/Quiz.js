import React, { Component } from 'react'

let quizData = require('./quiz_data.json')

class Quiz extends Component
{

    render(){
        return (
            <div>
                <div class="QuizQuestion">
                    {quizData.quiz_questions[0].instruction_text}
                </div>
            </div>
        )
    }

    constructor(props)
    {
        super(props)
        this.state = {quiz_positon: 1}
    }
}

export default Quiz