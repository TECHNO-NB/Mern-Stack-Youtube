import React from 'react'
import "./PagesStyle.css"

const Register = () => {
  return (
    <>
   <div id="register-form">
    <h2>Register</h2>
    <form action="#" method="post" enctype="multipart/form-data">
     <label for="fullname">Full Name:</label>
      <input type="text" id="fullname" name="fullname" required/>

      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required/>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required/>

      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required/>
      <label for="avatar">Avatar:</label>
      <input style={{cursor:"pointer"}} type="file" id="avatar" name="avatar" accept="image/*"/>
      
      <label for="cover">Cover Image:</label>
      <input style={{cursor:"pointer"}} type="file" id="cover" name="cover" accept="image/*"/>


      <button class="btn" type="submit">Register</button>
    </form>
   
  </div>
  </>
  )
}

export default Register