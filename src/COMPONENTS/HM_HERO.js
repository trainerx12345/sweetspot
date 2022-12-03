import { Link } from 'react-router-dom';
const HM_HERO = () => {
  return (
    <div id='HOME'>
      <section className='container pt-5'>
        <div className='container pt-5 pb-5'>
          <div className='row align-items-center '>
            {/* <!-- Heading --> */}
            <h1 className=' text-center text-md-start'>
              Welcome to
              <br />
              <span className=' display-1 text-primary'>SweetSpot</span>.
              <br />
            </h1>
            <h3 className='text-center text-md-start'>
              <span className='text-dark '>Delicious dipped in beauty.</span>
            </h3>

            {/* <!-- Text --> */}
            <p className='lead text-center text-md-start text-muted mb-6 mb-lg-8'>
              You deserve the best taste,
              <br /> so we bake the best.
            </p>

            {/* <!-- Buttons --> */}
            <div className='text-center text-md-start'>
              <Link
                to='/PRODUCTS'
                className='btn btn-primary shadow text-center'
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
        {/* <!-- / .row --> */}
      </section>
      {/* <!-- / .container --> */}
    </div>
  );
};
export default HM_HERO;
