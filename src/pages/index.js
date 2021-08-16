import React from "react"
import { Helmet } from "react-helmet"
import { render, Comment } from "minista"

const Home = () => {
  return render(
    <main>
      <Helmet>
        <title>HTML coding with minista</title>
      </Helmet>
      <Comment text="Comment Test" />
      <h1>Hello</h1>
    </main>
  )
}

export default Home