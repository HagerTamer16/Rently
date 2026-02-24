import "./HowItWork.css";

const HowItWork = () => {
  return (
    <section className="how">
      <div className="container">
        <p className="how-sub">How It Works</p>
        <h2 className="how-title">
          Rent a Car in <span>4 Easy Steps</span>
        </h2>

        <div className="how-content">

          <div className="how-side">

            <div className="how-step">
              <div className="number-wrapper">
                <span className="step-num">1</span>
                <div className="number-icon">
                  <img src="src/assets/images/car.svg" alt="choose car" />
                </div>
              </div>

              <div className="step-info">
                <h3><span>Choose</span> Your Car</h3>
                <p>
                  Browse available cars and select the one that fits your needs and budget.
                </p>
              </div>
            </div>

            <div className="how-step">
              <div className="number-wrapper">
                <span className="step-num">3</span>
                <div className="number-icon">
                  <img src="src/assets/images/boket.svg" alt="secure booking" />
                </div>
              </div>

              <div className="step-info">
                <h3>Secure Your <span>Booking</span></h3>
                <p>
                  Complete your payment safely through our secure system.
                </p>
              </div>
            </div>

          </div>

          <div className="how-center">
            <div className="road-top"></div>

            <img
              src="src/assets/images/bluecar (2).png"
              alt="car"
              className="car-img"
            />

            <div className="road-bottom"></div>
          </div>

          <div className="how-side">

            <div className="how-step">
              <div className="number-wrapper">
                <span className="step-num">2</span>
                <div className="number-icon">
                  <img src="src/assets/images/calendar.svg" alt="select dates" />
                </div>
              </div>

              <div className="step-info">
                <h3>Select Pickup & Return <span>Dates</span></h3>
                <p>
                  Choose your rental dates and confirm availability.
                </p>
              </div>
            </div>

            <div className="how-step">
              <div className="number-wrapper">
                <span className="step-num">4</span>
                <div className="number-icon">
                  <img src="src/assets/images/Key.svg" alt="pick up car" />
                </div>
              </div>

              <div className="step-info">
                <h3><span>Pick Up</span> the Car</h3>
                <p>
                  Meet the owner or collect the car at the agreed location.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWork;