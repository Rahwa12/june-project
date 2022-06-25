import React from "react";

const Tempo = ({ d }) => {
  return (
    <>
      <td>
        {d.firstName} {d.lastName}
      </td>
      <td style={{ width: "10%" }}>{d.gender}</td>
      <td>{d.email}</td>
      <td>{d.phoneNo}</td>
      <td>{d.address}</td>
      <td>{d.department}</td>
      <td style={{ width: "10%" }}>{d.educationLevel}</td>
    </>
  );
};

export default Tempo;
