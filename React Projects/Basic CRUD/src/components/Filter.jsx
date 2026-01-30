import { IoFilterOutline } from "react-icons/io5";

const Filter = ({ filterDifficulty, setFilterDifficulty }) => {
  return (
    <>
      <div className="flex mt-4 items-center justify-center gap-4 border bg-[#414141]/40 w-full p-3">
        <IoFilterOutline className="text-2xl text-white " />
        <select
          value={filterDifficulty}
          onChange={(e) => setFilterDifficulty(e.target.value)}
          className="outline-none text-xl  bg-tranparent"
        >
          <option className="bg-[#111 text-white" value="All">
            All
          </option>
          <option className="bg-[#111] text-white" value="Easy">
            Easy
          </option>
          <option className="bg-[#111] text-white" value="Normal">
            Normal
          </option>
          <option className="bg-[#111] text-white" value="Hard">
            Hard
          </option>
        </select>
      </div>
    </>
  );
};

export default Filter;
