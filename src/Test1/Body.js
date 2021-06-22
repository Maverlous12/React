import React, { Component } from 'react';
import './Body.css'

class Body extends Component {
    render() {
        return (

            <div className="container">
                <div className="text-center">
                    <h1>List User</h1>
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
                                <button type="button" className="btn btn-sm btn-warning" style={{ 'marginRight': '20px' }}>
                                    <span className="fa fa-pencil mr-5"></span> Edit
                                </button>

                                <button type="button" class="btn btn-sm btn-danger">
                                    <span className="fa fa-pencil mr-5"></span> Delete
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">2</td>
                            <td className="text-center">Quach Van Nhan</td>
                            <td className="text-center"> 30 </td>
                            <td className="text-center">Male</td>
                            <td className="text-center">
                                <button type="button" className="btn btn-sm btn-warning" style={{ 'marginRight': '20px' }}>
                                    <span className="fa fa-pencil mr-5"></span> Edit
                                </button>

                                <button type="button" class="btn btn-sm btn-danger">
                                    <span className="fa fa-pencil mr-5"></span> Delete
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">3</td>
                            <td className="text-center">Doan Thi Diem</td>
                            <td className="text-center"> 20 </td>
                            <td className="text-center">Female</td>
                            <td className="text-center">
                                <button type="button" className="btn btn-sm btn-warning" style={{ 'marginRight': '20px' }}>
                                    <span className="fa fa-pencil mr-5"></span> Edit
                                </button>

                                <button type="button" class="btn btn-sm btn-danger">
                                    <span className="fa fa-pencil mr-5"></span> Delete
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">4</td>
                            <td className="text-center">Le Van Lam</td>
                            <td className="text-center"> 22 </td>
                            <td className="text-center">Male</td>
                            <td className="text-center">
                                <button type="button" className="btn btn-sm btn-warning" style={{ 'marginRight': '20px' }}>
                                    <span className="fa fa-pencil mr-5"></span> Edit
                                </button>

                                <button type="button" class="btn btn-sm btn-danger">
                                    <span className="fa fa-pencil mr-5"></span> Delete
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">5</td>
                            <td className="text-center">Le Quynh Trang</td>
                            <td className="text-center"> 38 </td>
                            <td className="text-center">Female</td>
                            <td className="text-center">
                                <button type="button" className="btn btn-sm btn-warning" style={{ 'marginRight': '20px' }}>
                                    <span className="fa fa-pencil mr-5"></span> Edit
                                </button>

                                <button type="button" class="btn btn-sm btn-danger">
                                    <span className="fa fa-pencil mr-5"></span> Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>




            </div>


        );
    }
}

export default Body;