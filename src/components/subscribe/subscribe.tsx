import "./subscribe.sass"
// const nodemailer = require("nodemailer");

export function Subscribe() {
  return (
    <section className="subscribe">
      <h2 className="subscribe__title">Beer mail</h2>
      <p className="subscribe__description">
        Stay in the loop. Get great deals. Be the first to know about upcoming releases. Join the club!
      </p>
      <form className="subscribe__form" action="#" method="post">
        <label className="subscribe__field" htmlFor="email">
          <input className="subscribe__input" type="email" id="email" name="email" placeholder="your e-mail..."/>
        </label>
        <button className="subscribe__btn" type="submit">Subscribe</button>
      </form>
    </section>
  );
}
