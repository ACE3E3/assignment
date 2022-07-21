import React, { Component } from 'react'
import './App.css';
import { AiFillHome, AiFillWarning } from 'react-icons/ai';
import {FaBoxes, FaTruckMoving, FaArrowRight} from 'react-icons/fa';
import {TbRoute, TbReport} from 'react-icons/tb';
import {BsFillCalendar2DateFill, BsFillCheckSquareFill, BsFillPersonFill} from 'react-icons/bs';
import {RiLogoutCircleFill, RiArrowDropDownLine} from 'react-icons/ri';
import axios from 'axios';

class Product extends React.Component {
    constructor() {
        super();
        this.state = {product : {}}
    }

    componentDidMount(){
        const url = `http://v2.test.boxigo.in/api_assignment.json`

        axios.get(url).then(response => {
            console.log(response.data)
            this.setState({
                product : response.data
            })
        })
    }


    render(){
        
    console.log("hello");
    console.log(this.state.product.items?.rooms[0].categories);

        return (
            <div className='main'>
                  <div className='side_container'>
                  <div id="mySidebar" class="sidebar">
                    <a href="#"><span><FaTruckMoving /></span><span class="icon-text value">about</span></a><br />
                    <a href="#"><span><BsFillPersonFill /></span><span class="icon-text value">services</span></a>
                    <br />
                    <a href="#"><span><TbReport /></span><span class="icon-text value">get quote</span></a><br />
                    <a href="#"><span><RiLogoutCircleFill /></span><span class="icon-text value">Logout</span><span></span></a>
                  </div>
                  <div className="app">
                  <ul>
                    <li>
                      <input type="checkbox"/>
                      <i></i>
                      <div className='head'>
                      <h2>From</h2>
                      <h2 className='head2'>To</h2>
                      </div>
                      <div className='head'>
                      <h5>{this.state.product.moving_from}</h5>
                      <h2><FaArrowRight /></h2>
                      <h5 className='head2'>{this.state.product.moving_to}</h5>
                      </div>
                      <div className='flex'>
                        <div className='info'><AiFillHome /><h6>{this.state.product.property_size}</h6></div>
                        <div className='info'><FaBoxes /><h6>{this.state.product.boxes_count}</h6></div>
                        <div className='info'><TbRoute /><h6>{this.state.product.distance}</h6></div>
                        <div className='info'><BsFillCalendar2DateFill /><h6>{this.state.product.moving_on}</h6></div>
                        <div className='info'><BsFillCheckSquareFill /><h6>{this.state.product.boxes_count}</h6></div>
                        <a class="btn" id="cancelButton" data-modal="comeback">view more details</a>
                      </div>
                      <div className='flex'>
                        <h6><AiFillWarning />DISCLAIMER : Please update your move date two days before shifting</h6>
                      </div>
                      
                      
        
                      <p>
                        <ul>
                          <li>
                            <input type="checkbox"/>
                            <h4 className='value'>Inventory Details <RiArrowDropDownLine /></h4>
                            <i></i>
                              <p>
                                <ul>
                                  <li>
                                    <input type="checkbox"/>
                                    <h4 className='value'>Living Room <RiArrowDropDownLine /></h4>
                                    <p>
                                    <div  className='flex'>
                                      <div>
                                            <div className='info'><h4 className='value'>Furniture</h4></div>
                                            <div className='info'><h5 className='value'>1 Seater Sofa</h5><span> - </span><h5>1</h5></div>
                                            <div className='info'><h5 className='value'>3 Seater Sofa</h5><span> - </span><h5>1</h5></div>
                                            <div className='info'><h5 className='value'>TV Cabinet</h5><span> - </span><h5>1</h5></div>
                                            <div className='info'><h5 className='value'>Study Table</h5><span> - </span><h5>1</h5></div>
                                            <div className='info'><h5 className='value'>Teapoy</h5><span> - </span><h5>1</h5></div>
                                            <div className='info'><h5 className='value'>Shoe Rack</h5><span> - </span><h5>1</h5></div>
                                            <div className='info'><h5 className='value'>Plastic Chair</h5><span> - </span><h5>2</h5></div>
                                        </div>
                                        
                                      <div>
                                        <div className='info'><h4 className='value'>Electricals</h4></div>
                                        <div className='info'><h5 className='value'>LCD TV</h5><span> - </span><h5>1</h5></div>
                                        <div className='info'><h5 className='value'>Home Theatre</h5><span> - </span><h5>1</h5></div>
                                        <div className='info'><h5 className='value'>Ceiling Fan</h5><span> - </span><h5>1</h5></div>
                                      </div>
                                      <div>
                                        <div className='info'><h4 className='value'>Fragile</h4></div>
                                        <div className='info'><h5 className='value'>Bulb</h5><span> - </span><h5>1</h5></div>
                                        <div className='info'><h5 className='value'>Picture / Poster / Painting</h5><span> - </span><h5>1</h5></div>
                                        <div className='info'><h5 className='value'>Clock</h5><span> - </span><h5>1</h5></div>
                                      </div>
                                    </div>
                                    </p>
                                  </li>
                                  <li>
                                    <input type="checkbox" />
                                    <h4 className='value'>Bedroom <RiArrowDropDownLine /></h4>
                                    <p></p>
                                  </li>
                                  <li>
                                    <input type="checkbox" />
                                    <h4 className='value'>Kitchen <RiArrowDropDownLine /></h4>
                                    <p></p>
                                  </li>
                                  <li>
                                    <input type="checkbox" />
                                    <h4 className='value'>Bathroom <RiArrowDropDownLine /></h4>
                                    <p></p>
                                  </li>
                                </ul>
                              </p>
                          </li>
                          <li>
                            <input type="checkbox"/>
                            <h4 className='value'>House Details <RiArrowDropDownLine /></h4>
                            <p>
                              <div className='flex'>
                                <div>
                                  <div className='info'><h4 className='value'>Existing House Details</h4></div>
                                  <div className='info'><h5 className='value'>Floor No</h5><span> - </span><h5>0</h5></div>
                                  <div className='info'><h5 className='value'>Elevator Available</h5><span> - </span><h5>No</h5></div>
                                  <div className='info'><h5 className='value'>Packing Required</h5><span> - </span><h5>Yes</h5></div>
                                  <div className='info'><h5 className='value'>Additional Information</h5><span> - </span><h5>1 meters</h5></div>
                                  <div className='info'><h5 className='value'>Distance from truck to door</h5><span> - </span><h5>No additional info</h5></div>
                                </div>
                                <div>
                                  <div className='info'><h4 className='value'>New House Details</h4></div>
                                  <div className='info'><h5 className='value'>Floor No</h5><span> - </span><h5>0</h5></div>
                                  <div className='info'><h5 className='value'>Elevator Available</h5><span> - </span><h5>4.No</h5></div>
                                  <div className='info'><h5 className='value'>Packing Required</h5><span> - </span><h5>Yes</h5></div>
                                  <div className='info'><h5 className='value'>Additional Information</h5><span> - </span><h5>1 meters</h5></div>
                                  <div className='info'><h5 className='value'>Distance from truck to door</h5><span> - </span><h5>No additional info</h5></div>
                                </div>
                              </div>
                            </p>
                          </li>
                        </ul>
                      </p>
                      
                    </li>
                  </ul>
                  </div>
                  </div>
                </div>
          );
    }
  
}

export default Product