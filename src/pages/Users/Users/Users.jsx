import { CiImport } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import UsersTable from "../UsersTable/UsersTable";

const Users = () => {
  return (
    <>
      <section className="flex items-center mt-8">
        <div className="w-[1216px] mx-20">
          <header className="h-10 w-full flex justify-between">
            <h1 className="text-2xl font-medium">Users</h1>
            <div className="flex justify-evenly font-semibold text-sm">
              <div className="text-[#4d5869] rounded-lg mx-2 flex justify-center items-center border w-[105px]">
                <CiImport className="mx-2" />
                <button className="">Import</button>
              </div>
              <div className="w-[123px] bg-[#7F56D9] rounded-lg text-white flex justify-center items-center">
                <FaPlus className="mx-2" />
                <button>Add User</button>
              </div>
            </div>
          </header>
          <section className="">
            <UsersTable />
          </section>
        </div>
      </section>
    </>
  );
};

export default Users;
