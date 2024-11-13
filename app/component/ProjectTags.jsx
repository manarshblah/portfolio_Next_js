import React from 'react'

const ProjectTags = ({name,onClick,isSelected}) => {
    const classbutton = isSelected ? "border-purple-500 text-white": "border-slate-800 text-[#ADB7BE] hover:border-white";
    return (
        <button 
        className={`rounded-full border-2 px-6 py-3 mr-1 text-xl cursor-pointer ${classbutton}`}
        onClick={()=>onClick(name)}
        >
            {name}
        </button>
    )
}

export default ProjectTags