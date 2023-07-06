import React from 'react'

export default function OneUser(props) {
  const cacQuyen=()=>{
    if (props.quyen===1)
       { return "Admin"}
        else if (props.quyen===2){ return "Morrator"}
    else {return 'Normal User'}
}
  return (
    <tr>
    <td scope="row">{props.stt+1}</td>
    <td>{props.ten}</td>
    <td>{props.dt}</td>
    <td>{cacQuyen()}</td>
    <td>
      <div className="btn-group">
        <div className="btn btn-warning sua"><i className="fa fa-pencil" aria-hidden="true" />Sửa</div>
        <div className="btn btn-danger xoa"><i className="fa fa-minus" aria-hidden="true" /> Xóa</div>
      </div>
    </td>
  </tr> 
  )
}
