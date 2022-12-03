const HM_CONTACT = () => {
  return (
    <div id='CONTACT' className='pt-5 d-flex align-items-center justify-content-center'>
      <section className='contact-container container-fluid align-items-center justify-content-center'>
        <div className='contact-content container-fluid'>
          <div className='left-side'>
            <div className='address details'>
              <i className='fa fa-map-marker-alt'></i>
              <div className='topic'>Address</div>
              <div className='text-one'>Baguio, Philippines</div>
            </div>
            <div className='phone details'>
              <i className='fa fa-phone'></i>
              <div className='topic'>Phone</div>
              <div className='text-one'>+639-1231-232</div>
            </div>
            <div className='email details'>
              <i className='fa fa-envelope'></i>
              <div className='topic'>Email</div>
              <div className='text-one'>contact@engageph.com</div>
            </div>
          </div>
          <div className='right-side'>
            <div className='topic-text'>Vist us for freebies</div>
            <p style={{ color: "hsl('192, 100%, 9%')" }}>
            Get in touch. ミ(・・)ミ 😃
            </p>
            <form action='#'>
              <div className='input-box'>
                <input type='text' placeholder='Name' />
              </div>
              <div className='input-box'>
                <input type='text' placeholder='Email' />
              </div>
              <div className='input-box message-box'>
                <input type='text' placeholder='Message' />
              </div>
              <div className='button'>
                <input type='button' value='Send Message' />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HM_CONTACT;
