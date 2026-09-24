import Skill from './programmingSkills.jsx'

function Skills() {

    return(
        <div>
            <Skill language="HTML" summary="Webpage core" isLearnt={true}/>
            <hr></hr>
            <Skill language="CSS" summary="Webpage styling" isLearnt={true}/>
            <hr></hr>
            <Skill language="Javascript" summary="Webpage functions" isLearnt={true}/>
            <hr></hr>
            <Skill language="React libraby" summary="Webpage interfaces" isLearnt={false}/>
        </div>
    );
}

export default Skills