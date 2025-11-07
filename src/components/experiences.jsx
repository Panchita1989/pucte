import CardLeft from './cardLeft.jsx'
import CardRight from './cardRight.jsx'
import NavBar from './navBar.jsx'
import Footer from './footer.jsx'
import Button from './button.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'



function Experiences() { 
     return(
         <>  
             <section className='mx-2 my-1 py-5 bg-teal-950/80 text-neutral-300 tracking-widest leading-loose ransition-opacity duration-700 ease-out opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]'>
                 <NavBar />
                 <CardLeft title='EXPERIENCES' img='images/sail.png'>
                             <p className='pb-5'>
                              From the dock of Pucté, we sail.
                              A private escape that departs right from Pucté's dock into Bacalar’s lagoon — just you, the water, 
                              and the wind. Choose your route: cenotes, mangroves, or secret piers lost in time. Each tour lasts up 
                              to 3 hours, carried by the breeze.</p>

                              <p className='pb-5'>Private or collective. Sunset or midday. </p>
                              <h4>Choose your vessel:</h4> 
                              <ul className='md:mb-5 pb-5'>
                                <li>Catamaran</li>
                                <li> Monohull</li>
                              </ul>                                            
                              <div className='text-center mb-10'>
                                <Button 
                                  className='active:bg-teal-950 active:text-neutral-300 xl:hover:bg-teal-950 xl:hover:text-neutral-300 banner-content bg-neutral-300 text-teal-950 p-2 rounded content-animate md:hover:cursor-pointer' 
                                  content='Book now' />
                              </div>    
                 </CardLeft>               
                 <CardRight title='PADDLE BOARD TOUR' img='images/paddle.png'>
                     <h6 className='pb-5'>Introductory Stand Up Paddleboard Lesson</h6>
                     <p className='md:mb-5 pb-5'>
                      Start your day with a light breakfast: coffee or tea, seasonal fruit, toast with jam and peanut butter.
                      Then, enjoy a guided tour to Cenote Negro and Bird Island. (Ask about exclusive routes available for private tours.)
                      Photos are included to capture the experience.
                      We provide all the equipment you need: paddleboard, leash, paddle, and life jacket.
                      <br/>
                      No prior experience needed—our certified instructors will guide and support you throughout the entire journey.
                     </p>
                     <div className='text-center mb-10'>
                        <Button 
                          className='active:bg-teal-950 active:text-neutral-300 xl:hover:bg-teal-950 xl:hover:text-neutral-300 banner-content bg-neutral-300 text-teal-950 p-2 rounded content-animate md:hover:cursor-pointer' 
                          content='Book now' />
                    </div>
                 </CardRight>
                 <CardLeft title='MASSAGE' img='images/massage.webp'>
                  <p className='pb-5'>Treat yourself to a deeply relaxing massage with the best view Bacalar has to offer — right in front of the
                    lagoon. You can choose between an individual or couples massage, given by a male or female therapist, either in 
                    the privacy of your room or directly on the pier, surrounded by the peaceful sounds of nature.</p>

                    <span className=''>Reserve your Massage now:</span><br/>
                    <a href="" className=''><FontAwesomeIcon icon={faWhatsapp} className="active:text-teal-950  xl:hover:text-teal-950 text-3xl rounded-xl mt-5" /></a>


                 </CardLeft>
             </section>
             <Footer />
         </>
         
     )
}

export default Experiences
