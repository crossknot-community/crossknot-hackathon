
/**
 * 
 * Timer Component for the Crossknot hacks hackathon
 * 
 */


// export default function Timer(){
//     return (
//         <section>
//             timer will be added here
//         </section>
//     )
// }


import React, { Component } from "react";
// import moment from 'moment';

class CountDown extends Component {
  constructor(props) {
    super(props);
    this.count = this.count.bind(this);
    this.state = {
      days: 0,
      minutes: 0,
      hours: 0,
      secounds: 0,
      time_up: ""
    };
    this.x = null;
    this.deadline = null;
  }
  count() {
    var now = new Date().getTime();
    var t = this.deadline - now;
    var dd = Math.floor(t / (1000 * 60 * 60 * 24));
    var hh = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mm = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var ss = Math.floor((t % (1000 * 60)) / 1000);

    var days = dd < 10 ? "0" + dd : dd;
    var hours = hh < 10 ? "0" + hh : hh;
    var minutes = mm < 10 ? "0" + mm : mm;
    var seconds = ss < 10 ? "0" + ss : ss;

    this.setState({ days, minutes, hours, seconds });

    if (t < 0) {
      clearInterval(this.x);
      this.setState({
        days: 0,
        minutes: 0,
        hours: 0,
        seconds: 0,
        time_up: "TIME IS UP"
      });
    }
  }
  componentDidMount() {
    this.deadline = new Date("Feb 26, 2022 10:00:00").getTime();

    this.x = setInterval(this.count, 1000);
  }

  render() {
    const { days, seconds, hours, minutes } = this.state;
    return (
      <div id="countdown" className="flex gap-6 text-white font-primary my-10">
        <div className="col-4">
          <div className="flex flex-col items-center justify-center bg-primary rounded-md py-4 px-4 w-20 sm:w-14">
            <p id="day" className="text-center text-3xl">{days}</p>
            <span className="text-center cm:text-sm">Days</span>
          </div>
        </div>
        <div className="col-4">
        <div className="flex flex-col items-center justify-center bg-primary rounded-md py-4 px-4 w-20 sm:w-14">
            <p id="hour" className="text-center text-3xl">{hours}</p>
            <span className="text-center cm:text-sm">Hours</span>
          </div>
        </div>
        <div className="col-4">
        <div className="flex flex-col items-center justify-center bg-primary rounded-md py-4 px-4 w-20 sm:w-14">
            <p id="minute" className="text-center text-3xl">{minutes}</p>
            <span className="text-center cm:text-sm">Minutes</span>
          </div>
        </div>
        <div className="col-4">
        <div className="flex flex-col items-center justify-center bg-primary rounded-md py-4 px-4 w-20 sm:w-14">
            <p id="second" className="text-center text-3xl">{seconds}</p>
            <span className="text-center cm:text-sm">Seconds</span>
          </div>
        </div>
      </div>
    );
  }
}

export default CountDown;
