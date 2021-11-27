import React, { useContext } from "react";
import { BiX } from "react-icons/bi";
import { DataContext } from "../../context/DataContext";

const HardSkills = ({ skill, technical, setTechnical }) => {
    const { dataProfile, setDataProfile } = useContext(DataContext);

    const deleteSkill = (e) => {
        e.preventDefault();

        console.log(technical);
        const tech = technical.filter((t) => t !== skill);
        setTechnical(tech);
        setDataProfile({
            ...dataProfile,
            technicalSkills: tech,
        });
    };
    return (
        <button onClick={deleteSkill}>
            {skill} <BiX />
        </button>
    );
};

export default HardSkills;
