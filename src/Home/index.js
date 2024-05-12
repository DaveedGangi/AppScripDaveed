import {Component} from "react"

import { CiSearch,CiUser,CiLinkedin } from "react-icons/ci";
import { PiHeart } from "react-icons/pi";
import { TbShoppingBag } from "react-icons/tb";
import { FaBars } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLessThan,FaGreaterThan } from "react-icons/fa6";

import { TiHeartFullOutline } from "react-icons/ti";






import "./index.css"


class Home extends Component{

    state={storageOfAllItems:[],showCustom:false,category:""}


    componentDidMount(){
        this.fetchApi()
    }

    fetchApi=async()=>{
        const{category}=this.state
        console.log(category)

        const api="https://fakestoreapi.com/products"
        const response=await fetch(api)
        console.log(response)
        if(response.ok===true){

            const  dataAll=await response.json()
            console.log(dataAll)
            const data=dataAll.map((each)=>({
                id:each.id,
                star:false,
                title:each.title,
                price:each.price,
                image:each.image,
                category:each.category,
                description:each.description


            }))
            this.setState({storageOfAllItems:data})
        }
    }


    addHeart=(id)=>{

        this.setState(prevState=>({storageOfAllItems:prevState.storageOfAllItems.map((each)=>{
            if(each.id===id){
                return {...each,star:!each.star}
            }
            return each
        })}))
    }

    showHideCustom=()=>{

        this.setState(prevState=>({showCustom:!prevState.showCustom}))
    }

    fetchingOnApi=async()=>{
        const{category}=this.state

        const api=`https://fakestoreapi.com/products/category/${category}`

        const response=await fetch(api)
        console.log(response)
        if(response.ok===true){

            const  dataAll=await response.json()
            console.log(dataAll)
            const data=dataAll.map((each)=>({
                id:each.id,
                star:false,
                title:each.title,
                price:each.price,
                image:each.image,
                category:each.category,
                description:each.description


            }))
            this.setState({storageOfAllItems:data})
        }
    }

    fetchAgain=(event)=>{
      
        console.log(event)
       
        console.log(event.target.value)

        this.setState({category:event.target.value},this.fetchingOnApi)
    }

    render(){

        const{storageOfAllItems,showCustom}=this.state

        return(
            <div>

            <div>
            <div className="navbar-for-bigger-screen">
                <div className="navbar-bg">
                    <div>
                        <img src="https://i.ibb.co/pzcs6RK/Logo.png" alt="not-found-logo"/>

                    </div>
                    <div>
                        <h1 className="logo-heading">LOGO</h1>
                    </div>
                    <div className="icons-flex">
                        <div>
                        <CiSearch />
                        </div>
                        <div>
                        <PiHeart />
                        </div>
                        <div>
                        <TbShoppingBag />
                        </div>
                        <div>
                        <CiUser /> 
                        </div>
                        <div>
                            <select>
                                <option>ENG</option>
                                <option>TEL</option>
                                <option>TAM</option>
                                <option>CHI</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="user-explore">
                    <div className="shop-skills-flex">
                        <h3>SHOP</h3>
                        <h3>SKILLS</h3>
                        <h3>STORIES</h3>
                        <h3>ABOUT</h3>
                        <h3>CONTACT US</h3>
                    </div>
                </div>
            </div>

            <div className="nav-bar-for-smaller-screen">
            <div className="navbar-smaller-screen">
            <div>
            <FaBars /> &emsp;
            <img className="image-logo-smaller-screens" src="https://i.ibb.co/pzcs6RK/Logo.png" alt="not-found-logo"/>
            </div>

            <div>
                <h1 className="heading-logo-smaller-screen">LOGO</h1>
            </div>

            <div className="smaller-screen-icons">
                        <div>
                        <CiSearch />
                        </div>
                        <div>
                        <PiHeart />
                        </div>
                        <div>
                        <TbShoppingBag />
                        </div>

            </div>

            </div>

            <div className="home-shop-for-smaller-screens">
               &emsp; <h3 className="smaller-home">HOME</h3>&emsp;<h3>|</h3>&emsp;<h3>SHOP</h3>
            </div>
            </div>

            <div className="discover-our-products-heading">
                <div className="discover-our-products-card">
                    <h1 className="discover-our-heading">DISCOVER OUR PRODUCTS</h1>
                    <p className="discover-para">Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
                </div>
            </div>

            </div>



            <div className="filter-head-for-bigger-screen">

                <div className="filter-head-for-bg">
                    <div className="all-items-length">
                        <h4>{storageOfAllItems.length} ITEMS</h4>
                        {
                            showCustom===false?  
                            <button onClick={this.showHideCustom} className="custom-button" type="button"><FaGreaterThan /> &nbsp; SHOW FILTER</button>
                            :
                            <button onClick={this.showHideCustom} className="custom-button" type="button"> <FaLessThan /> &nbsp;HIDE FILTER </button>
                       

                        }
                         </div>
                    <div>
                        <select className="filter-select">
                            <option>RECOMMENDED</option>
                            <option>NEWEST FIRST</option>
                            <option>POPULAR</option>
                            <option>PRICE : HIGH TO LOW</option>
                            <option>PRICE: LOW TO HIGH</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="filter-head-for-smaller-screen">

                <div className="filter-head-for-bg">
                    <div>
                    <h4>FILTER</h4>
                    
                <div className="filter-head-for-bg">
                    <div className="all-items-length">
                      
                        {
                            showCustom===false?  
                            <button onClick={this.showHideCustom} className="custom-button" type="button"><FaGreaterThan /> &nbsp; SHOW FILTER</button>
                            :
                            <button onClick={this.showHideCustom} className="custom-button" type="button"> <FaLessThan /> &nbsp;HIDE FILTER </button>
                       

                        }
                         </div>
                    <div>
                        <select className="filter-select">
                            <option>RECOMMENDED</option>
                            <option>NEWEST FIRST</option>
                            <option>POPULAR</option>
                            <option>PRICE : HIGH TO LOW</option>
                            <option>PRICE: LOW TO HIGH</option>
                        </select>
                    </div>
                </div>
                    </div>
                 
                        
                   
                </div>
            </div>


            <div className="product-bg">

                {
                    showCustom===true&&
                
                <div className="left-side-custom">

                    <div>
                      
                        <h4  htmlFor="custom">CUSTOMIZBLE</h4>
                    </div>
                    <div>
                        <hr/>
                    </div>
                    <div>
                        <div className="flex-custom1">
                        <h4>CATEGORIES</h4>
                        <div>
                        <input onChange={this.fetchAgain} value="electronics" type="checkbox" id="electronics"/>
                        <label htmlFor="electronics">Electronics</label>
                        </div>

                        <div>
                        <input onChange={this.fetchAgain} value="jewelery" type="checkbox" id="jewelery"/>
                        <label htmlFor="jewelery">Jewelery</label>
                        </div>

                        <div>
                        <input onChange={this.fetchAgain} value="men's clothing" type="checkbox" id="men's clothing"/>
                        <label htmlFor="men's clothing">Men's clothing</label>
                        </div>

                        <div>
                        <input onChange={this.fetchAgain} value="women's clothing" type="checkbox" id="women's clothing"/>
                        <label htmlFor="women's clothing">Women's clothing</label>
                        </div>

                        </div>
                       
                    
                      
                    </div>
                </div>

                }


                <div>
                    <div className="card-item-bg">
                        {
                            storageOfAllItems.map((each)=>(
                                <div className="each-card-item" key={each.id}>
                                    <div>
                                        <img className="each-image" src={each.image} alt={each.title}/>
                                    </div>
                                    <h4>{each.title}</h4>
                                    <div className="heart-flex">
                                    <p>Sign in or Create an account to see pricing</p>
                                    <div>
                                        <button onClick={()=>{this.addHeart(each.id)}} className="heart-on">

                                      
                                        {each.star===false?<PiHeart/>: <TiHeartFullOutline /> }
                                        
                                        </button>
                                    </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>





            <div>

            <div className="bottom-navbar-bigger-screen">
                <div className="first-bottom-show">

                    <div>
                        <h4>BE THE FIRST TO KNOW</h4>
                        <p>Sign up for updates from mettā muse.</p>
                        <br/>
                        <input className="email" type="email" placeholder="Enter your e-mail..."/>
                        &emsp;
                        <button className="subscribe" type="button">SUBSCRIBE</button>
                    </div>


                    <div>
                        <h4>CONTACT US</h4>
                        <p>+44 221 133 5360</p>
                        <p>customercare@mettamuse.com</p>
                        <h4>CURRENCY</h4>
                        <div className="currency">
                            <div>
                            <img src="https://i.ibb.co/GcnP2bb/United-States-of-America-US.png" alt="usd"/>
                            </div>
                            <div>
                                <h4>&nbsp;+ USD</h4>
                            </div>
                        </div>
                        <p className="bottom-para">Transactions will be completed in Euros and a currency reference is available on hover.</p>

                    </div>


                </div>

                <div className="hr">
                    <hr/>
                </div>

                <div className="second-bottom-footer">

                    <div>
                        <h4>mettā muse</h4>
                        <p>About Us</p>
                        <p>Stories</p>
                        <p>Artisans</p>
                        <p>Boutiques</p>
                        <p>Contact Us</p>
                        <p>EU Compliances Docs</p>
                    </div>

                    <div>
                        <h4>QUICK LINKS</h4>
                        <p>Orders & Shipping</p>
                        <p>Join/Login as a Seller</p>
                        <p>Payment & Pricing</p>
                        <p>Return & Refunds</p>
                        <p>FAQs</p>
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                    </div>

                    <div>
                        <h4>FOLLOW US</h4>
                        <div>
                        <FaInstagram/>&emsp;<CiLinkedin/>
                        </div>
                        <br/>
                   
                        <h4>mettā muse Accepts</h4>
                        <div className="bottom-images-flex">
                            <div>
                                <img className="image-bottom2" src="https://i.ibb.co/Yy3tRM7/Group-136188.png" alt="google-pay"/>
                            </div>
                            <div>
                                <img className="image-bottom2" src="https://i.ibb.co/BVPXwTX/Group-136190.png" alt="money"/>
                            </div>
                            <div>
                                <img className="image-bottom2" src="https://i.ibb.co/Yyckh1D/Group-136192.png" alt="paying"/>
                            </div>
                            <div>
                                <img className="image-bottom2" src="https://i.ibb.co/hVfYW0Y/Group-136193.png" alt="amex"/>
                            </div>
                            <div>
                                <img className="image-bottom2" src="https://i.ibb.co/3YVdNvL/Group-136194.png" alt="pay"/>
                            </div>
                            <div>
                                <img className="image-bottom2" src="https://i.ibb.co/LkmSL7V/Group-136195.png" alt="payment"/>
                            </div>

                        </div>
                    </div>

                </div>


            </div>


            <div className="bottom-navbar-smaller-screen">
            
                <div>
                    <div>
                        <h4>BE THE FIRST TO KNOW</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text.</p>
                        <div className="small-email">
                            <input className="email" type="email" placeholder="Enter your e-mail..."/>
                            &emsp;<button className="subscribe" type="button">SUBSCRIBE</button>
                        </div>
                    </div>
                    <div>
                        <hr/>
                    </div>
                    <div>
                        <h4>CALL US</h4>
                        <div className="callus">
                            <p>+44 221 133 5360</p>
                            <p>&nbsp;+ customercare@mettamuse.com</p>
                        </div>
                    </div>
                    <div>
                        <hr/>
                    </div>
                    <div>
                        <h4>CURRENCY</h4>
                        <div className="currency">
                            <div>
                            <img src="https://i.ibb.co/GcnP2bb/United-States-of-America-US.png" alt="usd"/>
                            </div>
                            <div>
                                <h4>&nbsp;+ USD</h4>
                            </div>
                        </div>
                    </div>

                    <div>
                        <hr/>
                    </div>

                    <div>
                        <h4>mettā muse</h4>
                        <select className="select">
                            <option value="about">About Us </option>
                            <option value="stories">Stories</option>
                            <option value="Art">Artisans</option>
                            <option value="Bo">Boutiques</option>
                            <option value="Us">Contact Us</option>
                            <option value="Eu">EU Compliances Docs</option>
                        </select>
                    </div>
                   

                    <div>
                        <hr/>
                    </div>
                 
                   

                    <div>
                        <h4>QUICK LINKS</h4>
                        <select className="select">
                            <option>Orders & Shipping</option>
                            <option>Join/Login as a Seller</option>
                            <option>Payment & Pricing</option>
                            <option>Return & Refunds</option>
                            <option>FAQs</option>
                            <option>Privacy Policy</option>
                            <option>Terms & Conditions</option>
                        </select>
                    </div>



                  <div>
                        <hr/>
                    </div>

                    <div>
                        <h4>FOLLOW US</h4>
                        <select className="select">
                            <option>TWITTER</option>
                            <option>LINKEDIN</option>
                           
                        </select>
                    </div>

                    <div>
                        <hr/>
                    </div>

                    <div>
                        <h4>mettā muse Accepts</h4>
                        <div className="bottom-images-flex">
                            <div>
                                <img className="image-bottom2" src="https://i.ibb.co/Yy3tRM7/Group-136188.png" alt="google-pay"/>
                            </div>
                            <div>
                                <img className="image-bottom2" src="https://i.ibb.co/BVPXwTX/Group-136190.png" alt="money"/>
                            </div>
                            <div>
                                <img className="image-bottom2" src="https://i.ibb.co/Yyckh1D/Group-136192.png" alt="paying"/>
                            </div>
                            <div>
                                <img className="image-bottom2" src="https://i.ibb.co/hVfYW0Y/Group-136193.png" alt="amex"/>
                            </div>
                            <div>
                                <img className="image-bottom2" src="https://i.ibb.co/3YVdNvL/Group-136194.png" alt="pay"/>
                            </div>
                            <div>
                                <img className="image-bottom2" src="https://i.ibb.co/LkmSL7V/Group-136195.png" alt="payment"/>
                            </div>

                        </div>

                        <div>
                            <p className="copy">Copyright © 2023 mettamuse. All rights reserved.</p>
                        </div>


                    </div>

                  


                  <div>
                  
                      
                  </div>





                </div>

           
           
           
            </div>


            </div>




            </div>
        )
    }
}

export default Home