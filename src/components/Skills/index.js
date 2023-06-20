import React from 'react';
import '../../styles/skills.scss';

function Skills({action4Ref}) {
    return (
        <div className='skills' id='action4' ref={action4Ref}>
            <div className='container'>
                <div className='row'>
                        <div className='skill-info col-12 col-md-5'>
                            <h2>We are expert in this field since almost 20 years.</h2>
                            <p>
                                Proin gravida nibh vel velit auctor aliquet aenean sollicitudin, lorem quis bibendum auctor, nisi elit cuat ipsum, nec sagittis sem nibh id elit duis sed odio sit nibh vulputate cursus a sit amet mauris morbi accumsan.
                            </p>
                        </div>
                        <div className='skill-target col-12 col-md-6'>
                            <div className='target-item'>
                                <h4> 
                                    Buildings
                                    <span>85%</span> 
                                </h4>
                                <div className='target'></div>
                            </div>
                            <div className='target-item'>
                                <h4>
                                    Architecture
                                    <span>60%</span> 
                                </h4>
                                <div className='target'></div>
                            </div>
                            <div className='target-item'>
                                <h4> 
                                    Constructions
                                    <span>70%</span> 
                                </h4>
                                <div className='target'></div>
                            </div>
                            <div className='target-item'>
                                <h4>
                                    Planning
                                    <span>40%</span> 
                                </h4>
                                <div className='target'></div>
                            </div>
                        </div>
                </div>
            </div>
            <div className='comp'>
                <div className='container'>
                    <div className='comp-content'>
                        <h3>An innovative company working with the latest technologies</h3>
                        <button>Get A Quote</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills;
