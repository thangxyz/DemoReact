import { Component } from "react";

class Search extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      ndTimKiem:''
  }
  
}
  hiennut=()=>{
    if(this.props.trangthaiCha===true)
    return   <div onClick={()=>this.props.ketnoi()}  className="btn btn-outline-info btn-block">Thêm mới</div>;
    else
    return  <div onClick={()=>this.props.ketnoi()}  className="btn btn-outline-secondary btn-block">Đóng</div>
}
isChange =(event)=>{
  this.setState({ndTimKiem:event.target.value});
}
    render() {
        return (
            <div className="col-12">
                <div className="row">
                    <div className="col-9">
                    <div className="searchForm">
              <div className="form-group">
                <div className="btn-group">
                <input onChange= {(event)=>this.isChange(event)} type="text" className="form-control" name id placeholder="Nhập từ khóa" style={{width: '800px'}} />
        <div onClick={(info)=>this.props.getInfoSearch(this.state.ndTimKiem)} className="btn btn-info">Tìm</div>
                </div>
              </div>
            </div> {/* end tìm kiếm  */}
                    </div>
                    <div className='col-3'>
    {this.hiennut()}
{/* <div onClick={()=>this.props.ketnoi()} className="btn btn-outline-info ">Thêm mới</div>
<div onClick={()=>this.props.ketnoi()} className="btn btn-outline-secondary ">Đóng</div> */}
  </div>
                </div>            
          </div>
          
        );
    }
}
export default Search;