import React from 'react';

import './ResultCard.css';

export interface ResultCardProps extends React.HTMLAttributes<HTMLElement> {
    children?: React.ReactNode;
    Result: string;
    answers: string[];
    buttonId?: number;
    progress?: number;
    buttonHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    progressDone?: () => void;
}

export const ResultCard: React.FC<ResultCardProps> = ({
    children,
    buttonHandler,
    buttonId,
    progressDone,
    ...props
}) => {
    //   const classNames = `btn btn-${variant} btn-${shape}`;
    const classNames = `resultcard`;
    let buttons;
    if (buttonHandler) {
        buttons = props.answers.map((answer, index) => (
            <div className="qc_answers" key={index} {...props}></div>
        ));
    } else {
        buttons = props.answers.map((answer, index) => (
            <div className="qc_answers" key={index} {...props}></div>
        ));
    }
    return (
        <>
            <div className={classNames} {...props}>
                <div>Results</div>
                <div>Correct answers: 2/3</div>
                <div className="qc_Result" key="kissa"></div>
                {buttons}
            </div>
        </>
    );
};

export default ResultCard;
