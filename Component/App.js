
import { useState } from 'react';
import '../App.css';
import AddUser from './AddUser';
import Header from './Header.jsx';
import List from './List';
import Search from './Search';
import dl from './data.json'
function App() {
  //khai báo state trong function (AddUser)
  const[trangthaiForm,settrangthaiForm]=useState(true);

//viết hàm đổi trạng thái form(Search)
const doitrangthaiForm=()=>{
  settrangthaiForm(!trangthaiForm);
}
//khai báo state data
const [data,setData]=useState(dl);



//khai báo state search
const [InfoSearch,setInfoSearch]=useState('')

//viết hàm lấy thông tin từ search
const getSearch=(info)=>{
  alert("Thông tin nhận được là: " + info);
  setInfoSearch(info);
}

//khai báo mảng để lưu kqua ,ban đầu mảng rỗng
var ketqua=[];
data.forEach((item)=>{
  if (item.name.indexOf(InfoSearch)!==-1)
  {ketqua.push(item)}
});
 //viết hàm lấy thôn tin cần thêm vào data
 const getNewUser=(name,tel,permission)=>{
  // alert('thông tin nhận được :'+name)
  var item={};//ban đầu là đối tượng rỗng
  item.id='';
  item.name=name;
  item.tel=tel;
  item.permission=permission;
  var newItem=data;
  newItem.push(item);
  setData(newItem);
  alert('đã thêm data')
}


  return (
    <div className="App">
     <Header/>
     <div className='container'>
        <div className='row'>
     <Search
     ketnoi={()=>{doitrangthaiForm()}}
     trangthaiCha={trangthaiForm}
    getInfoSearch={(info)=>{getSearch(info)}}

     />
     <List
      dataUser={ketqua}
     />
     <AddUser
     addInfoUser={(name,tel,permission)=>getNewUser(name,tel,permission)}
     
     trangthaiCha={trangthaiForm} 
     />
    </div>
    </div>
      </div>
  );
}

export default App;
