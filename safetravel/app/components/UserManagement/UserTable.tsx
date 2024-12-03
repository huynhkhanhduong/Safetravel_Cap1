import React from "react";
import UserRow from "./UserRow"; // Hàng người dùng
import { User } from "./User";

interface UserTableProps {
  users: User[];
  onDelete: (username: string) => void;
  onSetStatus: (username: string, currentStatus: string) => void;
}

const UserTable: React.FC<UserTableProps> = ({ users, onDelete,onSetStatus  }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse rounded-lg shadow-sm border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-left text-sm text-gray-600 font-medium">
            <th className="px-4 py-3">
              <input type="checkbox" className="form-checkbox" />
            </th>
            <th className="px-4 py-3">Username</th>
            <th className="px-12 py-3">Role</th>
            <th className="px-4 py-3">Last login</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <UserRow key={user.id} user={user} onDelete={onDelete} onSetStatus={onSetStatus}/>
            ))
          ) : (
            <tr>
              <td
                colSpan={6}
                className="text-center text-gray-500 text-sm py-4"
              >
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
