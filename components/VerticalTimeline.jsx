// VerticalTimeline.js
import React, { useState, useEffect, useRef } from 'react';
import './VerticalTimeline.css'; // Create this CSS file for styling
import { motion, useScroll } from "framer-motion";

//Hygraph imports
import client from "../apolloClient";
import { gql } from "@apollo/client";


const VerticalTimeline = () => {

  const [milestones, setMilestones] = useState(null);
  const [percentages,setPercentages] = useState([0.2,0.4,0.6]);

  function getMilestones() {
    const data = getStaticMilestiones();

    data.
      then((result) => {

        setMilestones(result['milestones']);
        const eventsNum = result['milestones'].length;
        const p_array = [];
        for (let i = 1; i <= eventsNum; i++) {
          p_array.push(i / eventsNum);
        }
        setPercentages(p_array);

      })
      .catch((err) => { console.log('error retrieving milestions', err); });

  }
  const handleScroll = () => {
    // code to execute on scroll
    setScrollValue(scrollYProgress.current);
    //console.log('User scrolled', scrollValue.current);

  };

  useEffect(() => {
    // Add the event listener when the component mounts
    getMilestones();
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });
  const [scrollValue, setScrollValue] = useState(scrollYProgress);


  const data = [['2005', 'Lorem Ipsum 1 lalalallaa'], ['2006', 'Lorem Ipsum 2 lkakakakkaaa'], ['2007', 'Lorem Ipsum 3 lkakdaskdkasda'], ['2008', 'Lorem Ipsum 4 asdklasdkasldacmzc'], ['2009', 'Lorem ipsum 2009 test']]



  return (

    <section >


      <div className='flex flex-row h-96 px-10'>
        <div className='flex flex-col justify-around'>
          {/* We create an array with the eprcentages accroidng to the number of elements in the array, then if the scroll value is larger than the element i of the percentahe array we make it brighter (offset of 0.1 to make it more accurate) */}


          {milestones ? milestones.map((d, index) => (


            <div key={d.year} className={`text-white text-xl md:text-4xl md:px-8 `} style={{ filter: `brightness(${scrollValue >= percentages[index] - 0.1 ? 1 : 0.4})` }}>{d.year}</div>
          )
          ) : <h1>Loading</h1>}

        </div>

        <div ref={ref} className='h-96'>
          <motion.div className="progress-bar" style={{ scaleY: scrollValue }} />
        </div>

        <div className='flex flex-col justify-around'>

          {milestones ? milestones.map((d, index) => (

            <div key={d.description} className='text-xs text-white md:px-8 md:text-xl' style={{ filter: `brightness(${scrollValue >= percentages[index] - 0.1 ? 1 : 0.4})` }}>{d.description}</div>
          )
          ) : <h1>Loading</h1>}

        </div>

      </div>

    </section>

  )

};


export async function getStaticMilestiones() {
  try {
    const { data } = await client.query({
      query: gql`
        query Homes {
          milestones {
            year
            description
          }
        }
      `,
    });

    return data;
  } catch (err) {
    console.log('error:', err);
  }
}

getStaticMilestiones()

export default VerticalTimeline;
