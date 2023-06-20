import { Fragment , useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Works from './components/Works';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './helpers/_slider.scss';
import './helpers/general.scss';
function App() {
  const action1Ref = useRef();
  const action2Ref = useRef();
  const action3Ref = useRef();
  const action4Ref = useRef();
  const action5Ref = useRef();
  const action6Ref = useRef();

  const sections = [
    {id:1, name:"Home" , Id:"#action1" , href:action1Ref},
    {id:2, name:"Services" , Id:"#action2" , href:action2Ref},
    {id:3, name:"Works" , Id:"#action3" , href:action3Ref},
    {id:4, name:"Skills" , Id:"#action4" , href:action4Ref},
    {id:5, name:"Testimonials" , Id:"#action5" , href:action5Ref},
    {id:6, name:"Contact" , Id:"#action6" , href:action6Ref}
  ];

  // Highlight Nav Menu on scroll
  // const handleScroll = () => {
  //   sections.map((section) => {
  //     let offsetTop  = window.pageYOffset;
  //     let current = section.href;
  //       if(window.scrollY >= offsetTop){
  //         console.log(current.offsetTop)
  //       };

  //     return section;
  //   })
  // };
    
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  // });


  return (
    <Fragment>
      <Header sections={sections}/>
      <Home action1Ref={action1Ref}/>
      <Services action2Ref={action2Ref}/>
      <Works action3Ref={action3Ref}/>
      <Skills action4Ref={action4Ref}/>
      <Testimonials action5Ref={action5Ref}/>
      <Contact action6Ref={action6Ref}/>
      <Footer/>
    </Fragment>
  );
}

export default App;
