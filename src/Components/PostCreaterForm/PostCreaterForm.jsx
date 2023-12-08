import React from 'react';
import cl from './PostCreaterForm.module.css'


const PostCreaterForm = ({children, active, setActive}) => {

    const rootClasses = [cl.PostCreaterForm]
    if (active) {
        rootClasses.push(cl.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setActive(false)}>
            <div className={cl.PostFormContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default PostCreaterForm;