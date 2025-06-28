import About from "./components/About/About"
import Footer from "./components/Footer/AppFooter"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Skills from "./components/Skills/Skills"
import Work from "./components/Work/Work"

 export const App =()=>{
  return(
    <>
    <Header/>
    <Home/>
    <About/>
    <Work/>
    <Skills/>
    <Footer/>
    </>
  )
}