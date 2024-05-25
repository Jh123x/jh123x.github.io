import React from 'react';
import Skills from '../Components/Skills';
import { MainLayout} from '../styles/Layouts';
import Resume from '../Components/Resume';

/**
 * ResumePage Component is the resume page of the website.
 * @returns {React.JSX.Element}
 */
const ResumePage = () => {
    return (
        <MainLayout>
            <Skills />
            <Resume />
        </MainLayout>
    )
}

export default ResumePage
