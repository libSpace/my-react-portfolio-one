import React, { useEffect, useRef } from 'react';
import { Typed } from 'react-typed';
import "./Malik.css"


function Malik() {
    const typedRef = useRef(null);

    useEffect(() => {
      const options = {
        strings: [
          "Jnr Software Developer",
          "An Aspiring Data Analyst",
        ],
        typeSpeed: 118,
        backSpeed: 95,
        loop: true,
        
        
      };
  
      // Ensure that the typedRef.current (HTML element) is not null before creating the Typed instance
      if (typedRef.current) {
        const typed = new Typed(typedRef.current, options);
  
        return () => {
          // Clean up the Typed instance when the component is unmounted
          typed.destroy();
        };
      }
    }, [typedRef]); // Include typedRef in the dependency array
  
    return (
      <div className='typed-container'>
        <span ref={typedRef} className='typed-text' />
      </div>
    );
  }
export default Malik;
