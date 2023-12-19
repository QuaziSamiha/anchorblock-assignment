import { useEffect, useState } from "react";
import { useGetUsersQuery } from "../../../features/api/usersSlice";
import { FaRegCheckSquare } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";
import { IoSquareOutline } from "react-icons/io5";
import { FaRegMinusSquare } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

const UsersTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, refetch } = useGetUsersQuery(currentPage);
  // console.log(data)
  useEffect(() => {}, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const users = data?.data || [];

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    // Refetch data with the new page
    refetch(newPage);
  };
  return (
    <div className="border border-[#eceef1] rounded my-12 h-[612px]">
      <table className="table-fixed w-full h-[548px]">
        <thead className="bg-[#F9FAFB] h-11 text-[#788194] border-b border-[#eaecf0] font-medium font-xs">
          <tr>
            <th className="w-[455.5px] pl-6 text-start">
              <div className="flex items-center">
                <div>
                  <FaRegMinusSquare className="w-5 h-5" />
                </div>
                <div className="pl-4">User Info</div>
                <div className="pl-2">
                  <FaArrowDown />
                </div>
              </div>
            </th>
            <th className="w-[455.5px] pl-6 text-start">About</th>
            <th className="w-[189px] pl-6 text-start">Status</th>
            <th className="w-[116px] pl-6"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="h-[72px] border-b border-[#eaecf0]">
              <td className="pl-6">
                <div className="flex">
                  <div className="mt-2.5">
                    {user.id % 3 === 0 ? (
                      <IoSquareOutline className="w-5 h-5 text-[#D0D5DD] text-thin" />
                    ) : (
                      <FaRegCheckSquare className="w-5 h-5 text-[#a588e4]" />
                    )}
                  </div>
                  <div>
                    <img
                      src={user.avatar}
                      className="w-10 h-10 rounded-full ml-4"
                      alt=""
                    />
                  </div>
                  <div className="text-sm ml-4">
                    <p className="text-[#101828] font-semibold">
                      {user.first_name + user.last_name}
                    </p>
                    <p className="text-[#667085]">{user.email}</p>
                  </div>
                </div>
              </td>
              <td className="pl-6 text-sm">
                <div className="h-10">
                  <p className="text-[#101828] font-medium">Data prediction</p>
                  <p className="text-[#667085]">AI and machine learning data</p>
                </div>
              </td>
              <td className="pl-4">
                <div
                  className={`h-[22px] text-xs leading-[18px] font-medium px-2 rounded-xl w-fit ${
                    user.id % 2 === 0 || user.id % 3 === 0
                      ? "text-[#027A48] bg-[#ecfdf3]"
                      : "text-[#344054] bg-[#f2f4f7]"
                  }`}
                >
                  {user.id % 3 === 0 || user.id % 4 === 0
                    ? "Churned"
                    : "Custormer"}
                </div>
              </td>
              <td className="text-[#9fa5b3] text-2xl">
                <div className="flex justify-around px-4">
                  <button className="w-10 h-10">
                    <RiDeleteBinLine className="mt-2 ml-2" />
                  </button>
                  <button className="w-10 h-10">
                    <FiEdit2 className="mt-2 ml-2" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* --------------------------------------  PAGINATION -------------------------------------- */}
      <div className="h-[64px] border-b">
        <div className="flex justify-between items-center p-4 text-sm font-medium text-[#344054]">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="ml-2 border border-[#e1e4e9] rounded-md px-3 py-2"
          >
            Previous
          </button>
          <span className="mx-4">
            Page {currentPage} of {data.total_pages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="mr-2 border border-[#e1e4e9] rounded-md px-3 py-2"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsersTable;
