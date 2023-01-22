import React from 'react'

interface QuestionProps {
     title?: string;
}

export const Question = ({
    title
}: QuestionProps) => {
    return (
        <div style={{backgroundColor: 'yellow'}}>
            {title}
        </div>
    )

}
export default Question;

  