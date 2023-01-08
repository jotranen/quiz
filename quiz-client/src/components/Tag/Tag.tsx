import React from 'react'

interface TagProps {
     title?: string;
}

export const Tag = ({
    title
}: TagProps) => {
    return (
        <div style={{backgroundColor: 'yellow'}}>
            {title}
        </div>
    )

}
export default Tag;

  