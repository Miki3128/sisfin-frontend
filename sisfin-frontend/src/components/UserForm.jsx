import React, { useState } from "react";

// Componente de formulario para agregar usuarios
function UserForm({ onAddUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !role) {
      setError("Por favor completa todos los campos.");
      return;
    }
    onAddUser({ name, email, role });
    setName("");
    setEmail("");
    setRole("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md mb-4">
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="block w-full border p-2 mb-2 rounded"
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="block w-full border p-2 mb-2 rounded"
      />
      <input
        type="text"
        placeholder="Rol"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="block w-full border p-2 mb-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Agregar Usuario
      </button>
    </form>
  );
}

export default UserForm;