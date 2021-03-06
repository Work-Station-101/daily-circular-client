import react, {useState} from 'react'

import './index.css'

export default function Profile() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  return (
    <div className="profile">
    <div className="row">
      <div className="col-sm-4">
        <img className="profile-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANAAAADyCAMAAAALHrt7AAAAwFBMVEX///8BAQEREiQAAAAMDSEYGSnz8/P39/fa2tr8/Pz29vZ9fX3w8PDe3t7Ozs7s7OwXFxc8PDwAABtVVVWvr6/FxcUmJiYNDQ1lZWUoKCiSkpLAwMDU1NS2trbl5eUGCB4AABWqqqqGhoZtbW0vLy9RUVGQkJCgoKAfHx9cXFxBQUE5OTkAAA5qamp2dnZJSUkkJTItLjpbW2OSkpl1dX5MTVgvMDxCRFGFho2YmJ46O0VkZGyIipRjY2x5eoCjo6iKquvKAAANU0lEQVR4nO1dB5eyOhBVgwoW7A1EEQu2dS1g/Vb//796BKQpKmoS0PPuObvuKjK5ZDKZJJNJJIIPTIoWOly3NKnma9ForTbs/dYlucxmGIxCcSHHct0GuIHoaFDJBV3CZ9DkSueSe8L4rM81gy6nP2QHvTtkXKx6XCvo0j4CU574IOPgVKoEXeR7yMj+2VicJnzQxb6FBBd9jo3J6TectdTJv0LHqKVR+GxetvAinTOlTtAELsA92XauKfXDVEmt3/fo6Ixq4WlJldq7dAxKctBEzui8XT0mIyloKjokRHwgo27QZCIo+UBKP0HTQctHY5QOmI+Mlo+mdVygfATEfCAjIUA+NHI+kBEdGJ9kFT0fjVE1sBF6F0MFQUazgPigb0BnQiAYJyiRx8MHKl0yCEJpXHwCst0tTApnMApg8mSEj08gdiGLsYICqSJ8LchgRNrvxmfizoQA4RE5j1XjICPChu4HM58oGBJ1gBJYvDgXIUB0QrWJW+NID1457HyioJYhSAhrr3omRFLnkvg1jqy3gNdNMAnlydm5MgE+ms5liREakCAUJbgi8UuGEDl/jkQTgjpHig8RIwcJkRqJN4nw0RixhAgJpAiVCRHqkCI0IERIukkI3IuIeZ7QiBAhT0/uzGXYq9YekHKFMdnveVw4IUSocC1cj3LpNA1nJdMp3aoq4+1SXUNpYl8DQMPjalAlRGh4LRpU5YTzEoaVRz3P0LJJmrd8tBw/q+pENNc6V79iBPJk7Pb1IgoAsodopsWWpZ/SuJE3dPG3PpPZy+mpJD+ClEDJw/8gNVNyOUECQO+eG8kkMrlcLpNJ3XKe6ToknI0kLh8UKfdUuuTTf9fPp/v6kn7l6kmRWfsqAbdUFMaVHTeSV7OXABCJeWTcRg4U0IzDKppRyeRBAIRyrkAYtA3XvagOyDhzrvE34kVrJh8AIZfVRu2ddNyEiKhcxVVBqA2ru/qJEHIOHtBPNQ1chIiYbceUDwaJzpVOQstejmcIftHf3uHKgygB16dVdT5BDHE5zugH0MNeRUzPpeOJx994Fq7OFfRw+9uucEwcGnexloZ9stHl9uCJenU58yCPQ4QN9yw9nm7iwrXCO4JwmWwA8CwP/LomG/DqnO3fAzCbDfEIkceSHdiOOQjVarC634hpzTDBOMZceAyPhb4lB/PymtVY8c78MGOLEO4FUFMSXjOXnFiEcPvB5jo7qOGUkrS6IezzMQIRQow5dYZ/xow1JWEypWeMLEIYvDgXaFNSD6uYLnlCJaxiJGKELJXDu6eoQ4wQb0rC6/qYUVgApLDKcTw6vEHprZpJCHeoVBqQUYUCmQcXiZxHxrjHQ5a7jXtHY87Ubdw7vswVDzDGK8cctmLfHpUCZBrRD6EmFInUieicOfUD6jil6OCJ+Fgdc3GcQJimZbgxxq0kG2chDQLL4FaPl8fXijjzoZHYHW7tJMSn35YpzeP2R3QIlqEbZSMV1DNZdIspW/MJhKKxRhYjUEO+4DEDVmITzBM+Nswmq1NCreXWJCMAVex9kInMxJ4HROwx8PazKhDc5JWUJ9bACO0anj3G94oewghrewpa79FakCQW+2fBriKUds7a9UJ+s7G18oVyjJxqWL02upv6lW0RQjjPZK2vBrHVeGbpHDoH0prQJr1HEqKFvv+zFiODSUBgjYyQNeACpr7AJ1jUVWR3qsRttoES4lbUs+5Has/DBawQUTSjV9vJ7qO43SuwF0IRuKiJYbAtCML2fxDMAUlBtyAI25V8287aq8QE9xJewe6L3jbdVlh9YElwdNh68maiF9m6EdEd01ew80S8N4xwVHXAaQBtW/tWZ2THP5DaMnQTdmzJG5ZOsh9L4AmR7aDX1z0gO0Iu8Hx5EWdzfrU0dhBeQDmkLmDr/2uD1+TQvkFATpwbDqV7qTeye6CQpAV1BCa/4obVsc3xvY70G4xmju+GJluwHUb3tN118glRIvEccDB6pmF3Hd8jtU/aF1gnI99Pmik5voZ/NfUpCE5GPifVWkPHl8ZhO9yCczL68bMQ4tq1UQ3Ux/aE5GRUfdghpWZOPrUwnv/gKiFI33di+Krr6gAHqXfQdZXxnh+U7QNX/QSXTPc+0m5Gw7L3IjbddaUaAPlw1g/E4GJf7VC6evY5wVU7cFIvNA6CB8quskaN9AlWBWRYuVS7oAN+iS0NvwQWXFHSUP0djfqT/HUWDABmYet/LpG7OgLCKwWJ9VHYDuTwADO4KvcNaPoYVvPmBtvwQ0mrLykMA24/SA4e5vaBx0N9RvUYaNXvU4KdVNBlfBLN25Rg7XTCbtw8kJVqHpz0PEXCB9KBSPGz60RFYzmMnrV/0J3ZpGbmzSpx/KcYtvvItLJ0Nhd6PUu1aFZGPrlOyyzdIubfJbJshS/L0qxe+p00oCohXxCF1rFWnfz26zNJLvMVNotndJ4VuLpnOjLEcWCsl4zGiBPQDZqYnDAoOW9/YYaRqsdlgk6n3NJAeL8dMqxU8PKTHSLHCA0X078jCKIgse9wysm9u2QMOX1kjJwzjzdJ9bhXh7iJ9EM2hpAJoq4yN/YlDoD0K2rOcL7oGCKQbFvi/csD8tOKx/aeyO4JQP3tSmp1nxLYe3Kx78nD07RnNniru8g8exjlc6sVqf7TyVe1L0gvz0dlBrUXBPo3Rtnnb69LAPWXetnKg9HgTXl5n3r+8qEO0GmR2KcsUIKV8n6Nj4c8X54k+yqfM6fhT4f2pQzJbLk7fJWMf0bvnm1nOF/ayIe+Y1kZmudKjfsuiD9hD108JCdZmQO6flrzl5vZ3LnCkplsU/PV0/2hl1f4mqTog3aE7pQXL6/5pov7hpjG/TaL6QwRpBwubn13ROZ7Gjc8uNvDvmXggsKdyIgEksOWiQPUbjWj2UfyuR1IfJkd+mNwY2LDlU/yswB6Xp04gWOssMErGifzqQoH4RVr96kWwcD10T5ETrHCh2svFfvRg5hxGW/34RV0He362S0Iwt275j69gqIXybk/uQ8y4fS6mc+vIFhF9kwGqTOs8MKRk2X8HYSszVQfb7MN2Jb79plcnwVzdwvT+BZC53OQP3ImwQvmQA/zmeUEYXgLqW/ROKhziW/SOFPnvsXGQegbNb9H46J6Qngkyw1hARy4kjq6kwxA54uMNoTWiL7DMTUBxpH8dxHKR6LfRSga+So+kNBnrgndAqh9Vb8K15BxLRMHBDD6ihksG4Czk6B9BQB/ffDuJ0NPXfNNjUjP5CZ8TxUZWc2Tn7tYfAlQTUW+qYqstPP1byFkxjElkcWUBQrHyfW5bxhDuLJMtJ4JOw8lAGi4Yhszj7ZRhBwA9C8D4Z8NbQ8TgGcUYNPP3pBQAoCCZ7gz08l/IiUAajf3qqQG2GJdMQGWd3AvLjghfxIlWFbu4dYEYfwZnGApx/72/NPS4613AUPfjHedk+Ymkmx6GF5O+jaENPvk0TdMc1DFGBD/Is6bKgYvbv7MCT/D8JAySpKvC+9lNqKFbiF4UkYJCl0BTSKTFsv99IJiZcjt/QwqaDNLJDOsnC4g3y7zgAfEJC2zGWyJJXKVjtTPY9gIdMVDay59qcOTSQWWzFYErtsvVNFscnLfpVrodzmhkg0i20eiRTcFPV/EJTcvpveuGBZKMCOE0CSY7uIBkqlEq1kROrLMSelZfdQfT3rVYb5Wq9k7vLR/8sNqbzLuj+qztMTJckeoNFuJFMJ8JXFUmOtYLNbr9WKh/aW/GfOAebV9qXk1CkQoTPCi4gQuuZFHgj8N/xMKO86E2m1Nq9vn94rmh+3ptEiJ1rXFYiz8MAhRqtqm9qqolbhdFJUiLDtFifuycNivpjoTSpxul0Vx82/9sL0HClPldmJR2f8dRFE9Lk5LcFDai/WeXW52G1r77yi250e1o8QPG2WPmxAVo1z/uV+tfyhoKNvmL+vzMyFxFS9uleXhsFQ2891iu1RXy1OMr/yBTVPdCTtepHfHk9I8xNaefQtKPov2ok3F2lQxppVUVOP6a3uuNYg2tMvw1zw2b2/EjTpfxvfxhRpbz8VN0UWovTzsldNe3f4rtqer6Wk63Sqb4lSp0CoPsgDQyg4ea3IEMewKJ66o7Xwvqps/Sivu6qAeqCW12GwX8aK62O8X6n4z3W6P/xTltNke44fd7m+/3a2UQ9FJKDbdKfPTRl38o4oaIa30W0VtiwDwRx7QIsgeOgCcds04/gZUPCiHzmmlLo8rdbWLb5XtVl2t1qed1g42u2P576Tpz+J4Aqf9ar88/in7w2m5Wq62oouQuDppTeWgqlrNKEtFUbRvFctlgS+y22OFP00rwurU3fLi7ZKgwpSPbpcHRT0qynGpKscjLM2fclyr26VWM/HD8hhfrpStqpVxq5H5015W8+2m7SJExfcUVEpxr64prcLV9jxOLVS12I7vpxtVpKjlfj0vqvj56F7RXJzH4sW51nwWInzVWg01p+bxmNaC4zHtr7n25ly7rrhYx+ZinIrPz51OxL4L7Iko4+fcJ1F690TpvZTeImNtzxJgYXXxc/UxdX65+PBbPYXvwf+Ewo7/AK7LSS717XAaAAAAAElFTkSuQmCC"/>
      </div>
      <div className="col-sm-2"></div>
      <div className="col-sm-6">
        <h3>{currentUser.firstName + ' ' + currentUser.lastName}</h3>
        <p><b>Linkedin:</b> <a href="#">{currentUser.firstName + ' ' + currentUser.lastName}</a></p>
        <p><b>github: </b><a href="#">{currentUser.firstName + ' ' + currentUser.lastName}</a></p>
        <p><b>Email: </b>{currentUser.email}</p>
        <p><b>Phone: </b>+88011111111</p>
      </div>
    </div>
    <hr></hr>
    <div style={{"marginTop": 20}}/>
    <div className="row">
      <p className="header">
        experience
      </p>
      <p className="title">XYZ, Dhaka-1212, Bangladesh - <i>Software Engineer</i></p>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsam quia impedit</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam iure suscipit earum fuga, deserunt accusantium</li>
      <li>Lorem ipsum dolor sit amet consectetur.</li>
    </div>
    <div style={{"marginTop": 20}}/>
    <div className="row">
      <p className="header">
        Academic Project
      </p>
      <p className="title">Student Information System - <i>Students can do course registration for the upcoming semester and can explore results of completed courses.</i></p>
      <p>Used HTML, CSS, Bootstrap, Jquery, PHP, MySQL</p>
      <p className="title">Art Galary Booking System - <i>Artist can book galary for their creatives.</i></p>
      <p>Used Django, MySQL</p>
    </div>
    <div style={{"marginTop": 20}}/>
    <div className="row">
      <p className="header">
        education
      </p>
      <p className="title">University of Liberal Arts, Dhaka-1216, Bangladesh - <i>Bachelor of Science in Computer Science and Engineering</i></p>
      <p>MARCH 2013 - JULY 2018</p>
    </div>
    <div style={{"marginTop": 20}}/>
    <div className="row">
      <p className="header">
        skils
      </p>
      <p className="title">Programming Languages: </p><p> C/C++, Java, Javascript, TypeScript. </p>
      <p className="title">Tools/Frameworks: </p> <p>Git, Jenkins, Node.js, Express.js, React.js, Spring Boot, docker, container registry,</p>
    </div>
    <div style={{"marginTop": 20}}/>
    <div className="row">
    <p className="header">
        achievements
      </p>
      <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
      </div>
    </div>
  );
};

