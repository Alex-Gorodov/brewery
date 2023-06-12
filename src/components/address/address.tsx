import "./address.sass"

export function Address() {
  return (
    <section className="address">
      <h2 className="address__title">Pick up your beer for free</h2>
      <div className="address__wrapper">
        <h3 className="address__title">Braga brewery</h3>
        <address className="address__description">
          <span>Peer 52</span>
          <span>32491 Haifa</span>
          <span>Israel</span>
        </address>
        <p className="address__shedule">
          <span>Sunday - Thursday   10AM - 4PM</span>
          <span>Friday   9AM - 2PM</span>
          <span className="address__shedule--gray">Closed on Holidays</span>
        </p>
        <a href="#" className="address__btn">Get directions</a>
      </div>
    </section>
  );
}