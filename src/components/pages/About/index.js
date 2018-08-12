import React from 'react'

import styles from './About.scss'

const About = () => (<div className={styles.container}>
  <h1>User story</h1>
  <p>As user I would like to see list of posts available by api - <a target='_blank' rel='noopener noreferrer' href='https://jsonplaceholder.typicode.com/'>https://jsonplaceholder.typicode.com/</a></p>
  <p>As user I would like to see post details with: title, post author, description</p>
  <h1>Recomendations</h1>
  <p>Use facebook/create-react-app as setup</p>
  <p>Use react js to render htm</p>
  <p>Use React Router 4 for routing</p>
  <p>Basic Responsive design using SCSS (no tools like material ui)</p>
</div>)

export default About 

