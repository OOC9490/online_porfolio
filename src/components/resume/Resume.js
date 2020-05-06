import React, { Component } from 'react';

export default class Resume extends Component{
    render() {
        const resumeData = this.props.resumeData;

        return (
  
          <section id="resume">
            {/* Education
          ----------------------------------------------- */}
            <div className="row education">
              <div className="three columns header-col">
                <h1><span>Education</span></h1>
              </div>
              <div className="nine columns main-col">
                {resumeData.education.map( course => (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{course.institution}</h3>
                      <p className="info">{course.courseName} <span>•</span> <em className="date">{course.completionDate}</em></p>
                      <p>
                        {course.summary}
                      </p>
                    </div>
                  </div>
                ))}
              </div> {/* main-col end */}
            </div> {/* End Education */}
            {/* Work
          ----------------------------------------------- */}
            <div className="row work">
              <div className="three columns header-col">
                <h1><span>Experience</span></h1>
              </div>
              <div className="nine columns main-col">
                { resumeData.experience.map( workPlace => (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{workPlace.company}</h3>
                      <p className="info">{workPlace.role} <span>•</span> <em className="date">{workPlace.duration}</em></p>
                      <p>
                        {workPlace.roleSummary}
                      </p>
                    </div>
                  </div>
                ))}
              </div> {/* main-col end */}
            </div> {/* End Work */}
            {/* Skills
          ----------------------------------------------- */}
            <div className="row skill">
              <div className="three columns header-col">
                <h1><span>Skills</span></h1>
              </div>
              <div className="nine columns main-col">
                <p>
                  {resumeData.skillSummary}
                </p>
                <div className="bars">
                  <ul className="skills">
                    { resumeData.skills.map(skill => (
                      <li><span className={skill.classStyling} /><em>{skill.skillName}</em></li>
                    ))}
                  </ul>
                </div>{/* end skill-bars */}
              </div> {/* main-col end */}
            </div> {/* End skills */}
          </section>
        );
    }
};
