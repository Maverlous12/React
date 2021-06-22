import React , { Component } from 'react';

class demo extends Component {
    render (){
      return (
      
        
        <div className="container">
            <div className="text-center">
                <h1>Danh sach nguoi dung</h1>
            </div>
            
            <table class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th className="text-center">ID</th>
                        <th className="text-center">Name</th>
                        <th className="text-center">Age</th>
                        <th className="text-center">Genre</th>
                        <th className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center">1</td>
                        <td className="text-center">Duong Anh Dung</td>
                        <td className="text-center"> 25 </td>
                        <td className="text-center">Male</td>
                        <td className="text-center">
                            
                            <button type="button" className="btn btn-warning">
                                <span className="fa fa-pencil mr-5"></span> Edit
                            </button>

                            <button type="button" className="btn btn-warning">
                                <span className="fa fa-pencil mr-5"></span> Edit
                            </button>
                            
                        </td>

                    </tr>
                </tbody>
            </table>
            



        </div>
        
      
      );
    }
  }
  
  export default demo;