import { useEffect, useState } from 'react';
import './ProgressBar.css';

export interface ProgressBarProps
    extends React.HTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    theme?: 'light' | 'dark';
    progressDone?: () => void;
    speed?: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
    children,
    progressDone,
    speed = 100,
    ...props
}) => {
    return (
        <div className="progress-bar">
            <Filler progressDone={progressDone} speed={speed} />
        </div>
    );
};

interface FillerProps extends React.HTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    progressDone?: () => void;
    speed?: number;
}

export const Filler: React.FC<FillerProps> = ({
    children,
    progressDone,
    speed = 100,
    ...props
}) => {
    const [count, setCount] = useState(15);

    useEffect(() => {
        let timer: ReturnType<typeof setInterval>;

        const updateCount = () => {
            timer = setInterval(() => {
                setCount((prevCount) => prevCount + 1);
            }, speed);

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
