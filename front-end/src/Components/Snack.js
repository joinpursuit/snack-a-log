import React from 'react'
import { Link } from "react-router-dom";

function Snack({snack}) {
  return (
    <tr>
      <td>
        {snack.is_healthy ? (
          <span>♥️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <Link to={`/snacks/${snack.id}`}>{snack.name}</Link>
      </td>
    </tr>
  )
}

export default Snack