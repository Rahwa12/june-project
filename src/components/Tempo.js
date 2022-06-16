import React from "react";

const Tempo = ({ d }) => {
  return (
    <div>
      <td>
        {d.firstName} {d.lastName}
      </td>
      <td>{d.gender}</td>
      <td>{d.email}</td>
      <td>{d.phoneNo}</td>
      <td>{d.address}</td>
      <td>{d.department}</td>
      <td>{d.educationLevel}</td>
    </div>
  );
};

export default Tempo;
