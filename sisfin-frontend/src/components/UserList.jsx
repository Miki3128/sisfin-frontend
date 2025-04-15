import React from "react";

// Componente que muestra la lista de usuarios agregados
function UserList({ users, onDeleteUser }) {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Usuarios Registrados</h2>
      {users.length === 0 ? (
        <p>No hay usuarios registrados.</p>
      ) : (
        <ul>
          {users.map((user, index) => (
            <li key={index} className="flex justify-between mb-2">
              <span>{user.name} - {user.email} - {user.role}</span>
              <button
                onClick={() => onDeleteUser(index)}
                className="text-red-500 hover:underline"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;