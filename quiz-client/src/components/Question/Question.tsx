import React from 'react'
import './Question.css';

interface QuestionProps {
     title?: string;
}

export const Question = ({
    title
}: QuestionProps) => {
    return (
        <div className="question">
            {title}
        </div>
    )

}
export default Question;

  