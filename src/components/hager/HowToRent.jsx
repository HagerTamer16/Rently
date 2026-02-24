import "./HowToRent.css";

const HowToRent = () => {
  return (
    <section className="rent">
      <div className="container">

        <div className="rent-badge">HOW TO RENT</div>

        <h2 className="rent-title">
          Rent with following 3 working steps
        </h2>
        <div className="rent-steps">

          <div className="rent-card">
            <div className="rent-icon">
              <img src="src/assets/images/location.svg" alt="choose location" />
            </div>
            <h3>Choose location</h3>
            <p>
              Choose your and find your best car
            </p>
          </div>

          <div className="rent-card">
            <div className="rent-icon">
              <img src="src/assets/images/calendar2.svg" alt="pick up date" />
            </div>
            <h3>Pick-up date</h3>
            <p>
              Select your pick up date and time to book your car
            </p>
          </div>

          <div className="rent-card">
            <div className="rent-icon">
              <img src="src/assets/images/🦆 icon _car_-2.svg" alt="book car" />
            </div>
            <h3>Book your car</h3>
            <p>
              Book your car and we will deliver it directly to you
            </p>
          </div>

        </div>

        <div className="rent-brands">
          <img src="src/assets/images/honda-9.png" alt="honda" />
          <img src="src/assets/images/jaguar.svg" alt="jaguar" />
          <img src="src/assets/images/nissan.svg" alt="nissan" />
          <img src="src/assets/images/Volvo Cars svg.svg" alt="volvo" />
          <img src="src/assets/images/Group-1.svg" alt="audi" />
          <img src="src/assets/images/acura-1.png" alt="acura" />
        </div>

      </div>
    </section>
  );
};

export default HowToRent;