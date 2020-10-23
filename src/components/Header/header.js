import React, { Component } from 'react';
import '../Header/header.css';
import $ from "jquery";
import Logo from "../../assets/imgHeader/logo.png";
import bgvideo from "../../assets/imgHeader/bg.mp4";

class Header extends Component {
      
    componentDidMount =() =>{
     
        $(window).on('scroll',function(){
             if($(window).scrollTop()){
                          $('nav').addClass('black')
                      }
             else{
                          $('nav').removeClass('black')
                      }
                  });

                  $(document).ready(function(){
                    $(".menu h4").click(function(){
                        $("nav ul").toggleClass("active")
                    })
                 })
              }


    render() {
        return (
            

            <div className="head">


                <div className="responsive-bar">
                    <div className="logo">
                    <img src={Logo} alt="logo" />
                    </div>
                    <div className="menu">
                        <h4>Menu</h4>
                    </div>
                </div>

                <nav>
                    <div className="logo">
                        <img src={Logo} alt="logo"></img>
                    </div>
                    <ul>
                        <li><i className="fa fa-user-o" aria-hidden="true"></i></li>
                        <li><a href="#" className="active">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Services</a></li>

                    </ul>
                </nav>

                <section className="sec1">

                    <h1>Maha Tailering...</h1>

                    <video autoplay loop src={bgvideo} type="video/mp4" alt="video" autoplay="true" className="video-bg" muted plays-inline>
                    </video>
                </section>
                <section className="content">
                    <p>  First,
                    privatisation is a response by the state to internal forces such as increasing fiscal problems (O’Connor, 1973).
                    It provides a means of lessening the state’s fiscal responsibilities by encouraging the development of private
                    alternatives which, theoretically at least, do not draw upon the state’s financial reserves. Second,
                    the promotion of private sector activity is a response to pressures originating ‘outside’ the state apparatus.
         <br></br>
         These include demands from people who see a large state bureaucracy as inefficient and wasteful,
         demands from business interests who claim that they can overcome these inefficiencies,
         and pressures from client groups who seek to reduce their dependency on the welfare
        state by having more control over the services on which they depend. Clearly, this variety of calls
        for privatisation means that it is not a process with a uniform outcome; there exists a correspondingly wide
         variety of forms of privatisation.
       </p>

                </section>
                <section className="sec2"></section>
                <section className="sec3"></section>
                <section className="sec4"></section>
                <section className="sec5"></section>
                <section className="sec6"></section>
                <section className="sec7"></section>

            </div>
        )
    }


}


export default Header;
