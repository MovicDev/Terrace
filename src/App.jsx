import { Route, Routes } from "react-router"
import NavBar from "./component/NavBar"
import Hero from "./component/Hero"
import WhatWeDo from "./component/WhatWeDo"
import Footer from "./component/Footer"
import Client from "./component/Client"
import Property from "./component/Property"
import ClientComment from "./component/ClientComment"

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<NavBar />}>
          </Route>
        </Routes>
        <Hero />
        <Client />
        <WhatWeDo />
        <Property />
        <ClientComment />
        <Routes>
        <Route path="/" element={<Footer />}>
        </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
