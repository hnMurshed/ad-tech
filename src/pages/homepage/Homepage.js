import React from 'react';
import Benner from './Benner';
import Blogs from './Blogs';
import Contact from './Contact';
import Instructors from './Instructors';
import Newsletter from './Newsletter';
import Services from './Services';
import Testemonials from './Testemonials';

const Homepage = () => {
    return (
        <div>
            <Benner />
            <Services />
            <Instructors />
            <Blogs />
            <Testemonials />
            <Contact />
            <Newsletter />
        </div>
    );
};

export default Homepage;