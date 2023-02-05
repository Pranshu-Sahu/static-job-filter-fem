import React from "react";

const List = (props) => {

  const tools = [props.role, props.level, ...props.languages, ...props.tools];
  const toolElements = tools.map((item, i) => (
    <div
      key={i}
      onClick={()=>{props.handleFilter(item)}}
      className="text-cyan-700 bg-cyan-100 cursor-pointer px-1 rounded-lg max-sm:mt-2"
    >
      {item}
    </div>
  ));

  return (
    <div className="mt-12 w-9/12 mx-auto rounded">
      <div className="p-4 flex items-center flex-wrap bg-white">
        <img
          src={props.logo}
          alt=""
          className="w-24 aspect-square"
        />
        <div className="flex flex-col ml-1">
          <div className="flex flex-row gap-x-2 text-sm">
            <span className="text-cyan-600">{props.company}</span>
            {props.new && (
              <span className="bg-cyan-600 px-1 text-white rounded-lg">
                NEW!
              </span>
            )}
            {props.featured && (
              <span className="bg-black px-1 text-white rounded-lg">
                FEATURED!
              </span>
            )}
          </div>
          <h2 className="font-bold text-lg">{props.position}</h2>
          <div className="flex flex-row gap-x-1.5 text-gray-500">
            <span>{props.postedAt}</span>
            <span> . </span>
            <span>{props.contract}</span>
            <span> . </span>
            <span>{props.location}</span>
          </div>
        </div>
        <div className="flex w-full gap-x-2">{toolElements}</div>
      </div>
    </div>
  );
};

export default List;
