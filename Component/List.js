import { Component } from "react";
import OneUser from './OneUser';
class List extends Component {
    render() {
        return (
            <div className="col">
            {/* B4-TABLE */}
            <table className="table table-hover table-inverse ">
              <thead className="thead-inverse">
                <tr>
                  <th>STT</th>
                  <th>Họ Tên</th>
                  <th>Số ĐT</th>
                  <th>Phân Quyền</th>
                  <th>Chức năng</th>
                </tr>
              </thead>
              <tbody>

                {this.props.dataUser.map((value, key) =>{
                  return <OneUser
                  ten ={value.name}
                  dt={value.tel}
                  quyen={value.permission}
                  stt={key}
                  id={value.id}
                  />
                 
                  
                })}
          
              </tbody>
            </table>
          </div>
          
        );
    }
}
export default List;