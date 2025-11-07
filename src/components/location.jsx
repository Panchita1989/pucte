import CardLeft from './cardLeft.jsx'
import CardRight from './cardRight.jsx'
import NavBar from './navBar.jsx'
import Footer from './footer.jsx'
import Button from './button.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


function Location() {
  return (
     <section className='mx-2 my-1 py-5 bg-teal-950/80 text-neutral-300 tracking-widest leading-loose ransition-opacity duration-700 ease-out opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]'>
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
    <h5>Taxi</h5>   
    <p className='mb-2'>If you're traveling from the airport by taxi or shuttle, the journey to Pucté will take approximately 40 minutes. 
      Here's a helpful tip in case the driver is unfamiliar with our location: kindly inform them to pass Bacalar town and after 
      5 minutes, they will reach the junction with Reforma at km 22.5. From the bus stop, they should exit right down the dirt road, 
      passing "Hotel Puerta del Cielo" and "Balneario Aron Merino." These landmarks will guide them to our destination.</p>
    <h5>By Car</h5>
    <p>You can rent a car at Chetumal Airport and enjoy a scenic 30-minute drive to Pucté. Complimentary parking is available 
      on-site for our guests.</p>
    <h3 className='mt-10 mb-2'>FROM TULUM</h3>
    <h5>By Car</h5>
    <p>Rent a car in Tulum City Center and take a scenic 2.5-hour drive to Pucté. The journey offers beautiful views, 
      and parking is available on-site for our guests.</p>
  </CardLeft>
     </section>
  )
}

export default Location
