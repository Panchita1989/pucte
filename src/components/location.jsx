import CardLeft from './cardLeft.jsx'
import CardRight from './cardRight.jsx'
import NavBar from './navBar.jsx'
import Footer from './footer.jsx'
import Button from './button.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { useCollapse } from "react-collapsed"



function Location() {
  
  const { 
    getCollapseProps: getCollapseChetu,
    getToggleProps: getToggleChetu,
    isExpanded: isChetuExpanded
 } = useCollapse();

 const { 
    getCollapseProps: getCollapseTulum,
    getToggleProps: getToggleTulum,
    isExpanded: isTulumExpanded
 } = useCollapse();

 const { 
    getCollapseProps: getCollapseCancun,
    getToggleProps: getToggleCancun,
    isExpanded: isCancunExpanded
 } = useCollapse();

  return (
    <>
     <section className=' md:mx-10 mt-20 mb-5 py-5 bg-teal-950/60 text-neutral-300 tracking-widest leading-loose'>
      <NavBar />
      <CardLeft 
        title='LOCATION'
        iframe={
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.056501162068!2d-88.38919471894607!3d18.706288418175838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5bb39377823331%3A0x8c30610f28ec058f!2sPuct%C3%A9%20Bacalar!5e0!3m2!1sde!2smx!4v1762529740854!5m2!1sde!2smx"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
  }>
    <span>Pucté is located on the Federal Highway, just a 10-minute drive from downtown Bacalar.</span>
    <h3 className='mt-10 mb-2'>FROM CHETUMAL</h3>
    {isChetuExpanded ? '' : (
    <button className='border-1 rounded p-2' {...getToggleChetu()}>Show More</button>
    )}
    <section className='mb-5' {...getCollapseChetu()}>
      <h5>Taxi</h5>   
      <p className='mb-2'>If you're traveling from the airport by taxi or shuttle, the journey to Pucté will take approximately 40 minutes. 
        Here's a helpful tip in case the driver is unfamiliar with our location: kindly inform them to pass Bacalar town and after 
        5 minutes, they will reach the junction with Reforma at km 22.5. From the bus stop, they should exit right down the dirt road, 
        passing "Hotel Puerta del Cielo" and "Balneario Aron Merino." These landmarks will guide them to our destination.</p>
      <h5>By Car</h5>
      <p className='mb-2'>You can rent a car at Chetumal Airport and enjoy a scenic 30-minute drive to Pucté. Complimentary parking is available 
        on-site for our guests.</p>
      <h5>By Tren</h5>
      <p className='mb-2'>If you're arriving by the Tren Maya from Chetumal, the ride to Bacalar Station takes approximately 20 minutes.
        From there, Pucté is only about 10 minutes away. Taxis are readily available outside the station.</p>
    </section>
    {!isChetuExpanded ? '' : (
      <button className='border-1 rounded p-2' {...getToggleChetu()}>Show Less</button>
    )}
    <h3 className='mt-10 mb-2'>FROM TULUM</h3>
    {isTulumExpanded ? '' : (
      <button className='border-1 rounded p-2' {...getToggleTulum()}>Show More</button>
    )}
    <section className='mb-5' {...getCollapseTulum()}>
      <h5>By Car</h5>
      <p className='mb-2'>Rent a car in Tulum City Center and take a scenic 2.5-hour drive to Pucté. The journey offers beautiful views, 
        and parking is available on-site for our guests.</p>
      <h5>By ADO</h5>
      <p className='mb-2'>
        You can travel from Tulum to Bacalar by ADO bus, with a comfortable ride of approximately 3 hours. 
        Once you arrive at the Bacalar bus station, taxis are available to bring you to Pucté in about 5 minutes.
      </p>
      <h5>By Tren</h5>
      <p className='mb-2'>If you're traveling by the Tren Maya from Tulum, the journey to Bacalar Station takes around 1 hour. From the station,
        Pucté is just a 10-minute taxi ride away, with transportation readily available on arrival.</p>
    </section>
    {!isTulumExpanded ? '' : (
      <button className='border-1 rounded p-2' {...getToggleTulum()}>Show Less</button>
    )}
     <h3 className='mt-10 mb-2'>FROM CANCUN</h3>
 {isCancunExpanded ? '' : (
   <button className='border-1 rounded p-2' {...getToggleCancun()}>Show More</button>
 )}

 <section className='mb-5' {...getCollapseCancun()}>
   <h5>By Car</h5>
   <p className='mb-2'>Rent a car in Cancún and enjoy a scenic 4-hour drive to Pucté. The route is straightforward, and parking is available on-site for our guests.</p>
   <h5>By ADO</h5>
   <p className='mb-2'>
    You can travel from Cancún to Bacalar by ADO bus, with a comfortable ride of approximately 5 hours. 
    Once you arrive at the Bacalar bus station, taxis are available to bring you to Pucté in about 5 minutes.
   </p>
   <h5>By Tren</h5>
   <p className='mb-2'>
    If you're traveling by the Tren Maya from Cancún, the journey to Bacalar Station takes around 1.5 hours. From the station, 
    Pucté is just a 10-minute taxi ride away, with transportation readily available on arrival.</p>
 </section>
 {!isCancunExpanded ? '' : (
   <button className='border-1 rounded p-2' {...getToggleCancun()}>Show Less</button>
 )}
  </CardLeft>
     </section>
     <Footer />
     </>
  )
}

export default Location
