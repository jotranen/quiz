import { useEffect, useState } from 'react';
import './ProgressBar.css';

export interface ProgressBarProps
    extends React.HTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    progressDone?: () => void;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
    children,
    progressDone,
    ...props
}) => {
    return (
        <div className="progress-bar">
            <Filler progressDone={progressDone} />
        </div>
    );
};

interface FillerProps extends React.HTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    progressDone?: () => void;
}

export const Filler: React.FC<FillerProps> = ({
    children,
    progressDone,
    ...props
}) => {
    const [count, setCount] = useState(15);

    useEffect(() => {
        let timer: ReturnType<typeof setInterval>;

        const updateCount = () => {
            timer = setInterval(() => {
                setCount((prevCount) => prevCount + 1);
            }, 100);

            if (count === 100) {
                clearInterval(timer);
                progressDone?.();
            }
        };

        updateCount();

        return () => clearInterval(timer);
    }, [count, progressDone]);

    return <div className="filler" style={{ width: `${count}%` }}></div>;
};

export default ProgressBar;
