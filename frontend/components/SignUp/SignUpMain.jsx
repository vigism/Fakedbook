import React from 'react';

class SignUpMain extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="signup-main-content">

            <div class="signup-main-content-mid">
                <div class="signup-left-bar">
                    <h2>Connect with friends and the world around you on FakedBook.</h2>
    
                    <div class="left-bar-list">
                        <div class="left-bar-list-element">
                            <div class="signup-logo-photos"></div>
                            <p><b>See photos and updates</b> from friends in News Feed.</p>
                        </div>
                        <div class="left-bar-list-element">
                            <div class="signup-logo-share"></div>
                            <p><b>Share what's new</b> in your life on Timeline.</p> 
                        </div>
                        <div class="left-bar-list-element">
                        <div class="signup-logo-find-more"></div>
                            <p><b>Find more</b> of what you're looking for with Facebook Search</p> 
                        </div>
                    </div>
                </div>
    
                <div class="signup-right-bar">
                    <form class="signup-form">
                        <h2>Sign Up</h2>
                        <p>It's free and always will be.</p>
                        <div>
                            <input type="text" value="First Name"/>
                            <input type="text" value="Last Name"/>
                        </div>
                        <input type="text" value="Mobile Number or email" />
                        <br/>
                        <input type="text" value="New Password"/><br/>
                        <label>Birthday
                            <select name="month">
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                            </select>
                      
                                <select name="day">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                </select>
                                <select name="year">
                                        <option value="1998">1998</option>
                                        <option value="1999">1999</option>
                                        <option value="2000">2000</option>
                                        <option value="2001">2001</option>
                                        <option value="2002">2002</option>
                                        <option value="2003">2003</option>
                                        
                                    </select>
                            </label><br/>
                            <label>Gender
                                    <input type="radio" name="gender" value="male"/> Male 
                                    <input type="radio" name="gender" value="female"/> Female
                            </label><br />
    
                            <input type="submit" value="Sign Up" class="sign-up-button" />
                    </form>
                </div>
            </div>
            </div>
    
       
        )
    }
}

export default SignUpMain;