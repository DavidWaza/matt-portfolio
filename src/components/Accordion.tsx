const profiles = [
  {
    profileTitle: ` Special Adviser in Technological Innovation`,
    firstExp: `Create new technological concept.`,
    secExp: `Manage different projects that led to over 2,000 tech jobs in the state.`,
    thirdExp: `Work on and implement new concepts that provided funds for tech start-ups in the state.`,
    fourthExp: `Listen to customer complaint, and implement new solution or fix, that helps to deliver a smooth experience.`,
  },
  {
    profileTitle: ` Frontend Software Engineer at Anywork Nigeria`,
    firstExp: `Developing an inventory management system utilizing ReactJs, HTML, CSS, JavaScript, and Firebase as a backend layer`,
    secExp: `Refactoring (condensing controllers) and optimization of inventory management system,`,
    thirdExp: `Installation, configuration and maintenance of active directory of domain services, share point portals, working extensively with
    servers, setting them up efficiently for fail over clustering and high availability.`,
    fourthExp: `Design of new optimized API that enables the customers(freelancers) using the platform to get more outreach to clients providing
    jobs to thousands of Nigerians.`,
  },
  {
    profileTitle: `Network and Software Engineer, Pipelines and Products Marketing Company`,
    firstExp: `Designing, developing and maintaining PPMC’s code-base; Front-end, APIs, systems and services.`,
    secExp: `Participating in code design and fixing telecom issues.`,
    thirdExp: `Solving business problems with technology.`,
    fourthExp: `Testing and debugging the network system for the company.`,
    fifthExp: `Work on and implement new features on front-end applications using Javascript extensively`,
  },
  {
    profileTitle: `Software Engineer at National Productivity Centre`,
    firstExp: `Develop highly interactive web applications utilizing JavaScript, HTML5, CSS, JSON, ensuring high performance on Mobile
    and Desktop.`,
    secExp: `Write clean, modular, and testable code in an agile environment.`,
    thirdExp: `Solid fundamental and working knowledge of application development using Web technologies like NodeJs, HTML, CSS.`,
    fourthExp: `Debug, optimize and refactor existing applications and software modules as required.`,
    fifthExp: `Coordinate SCRUM sessions and carry out code reviews of code from other developers.`,
    sixExp: `Automating cloud deployments using AWS tools.`,
    sevExp: `Execute and maintain security architecture design reviews and threat evaluation/modeling.`,
  },
];

const Accordion = () => {
  return (
    <div>
      {profiles.map((profile, index) => {
        return (
          <>
            <div className="collapse collapse-plus bg-[#0d0d0d]" key={index}>
              <input
                type="radio"
                name="my-accordion-3"
                className="text-[#E25F40]"
              />
              <div className="collapse-title text-3xl text-[#B5AB99] avant-semi">
                {profile.profileTitle}
              </div>
              <div className="collapse-content text-2xl text-[#E25F40] block avant-semi">
                <ul className="list-disc pl-5">
                  <li className="mt-3">{profile.firstExp}</li>
                  <li className="mt-3">{profile.secExp}</li>
                  <li className="mt-3">{profile.thirdExp}</li>
                  <li className="mt-3">{profile.fourthExp}</li>
                  <ul>
                    {[profile.fifthExp, profile.sixExp, profile.sevExp].map(
                      (item, index) =>
                        item && (
                          <li key={index} className="mt-3">
                            {item}
                          </li>
                        )
                    )}
                  </ul>
                </ul>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
export default Accordion;
