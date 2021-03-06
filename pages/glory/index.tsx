import React, { useState, useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import { FaAngleUp } from "react-icons/fa";

import Header from "components/header/Header";
import Footer from "components/footer/Footer";

// import ParticleImg from 'components/ParticleImg';
import SkillViewChart from "components/SkillViewChart";
// import SkillsView from 'components/SkillsView';
import SkillsText from "components/SkillsText";
import Pagination from "components/Pagination";
import Preloader from "components/Preloader";

type Props = {};

type ContactState = {
  yourname: string;
  email: string;
  subject: string;
  message: string;
  turnaround: boolean;
};

// const myLoader = ({ src, width, quality }) => {
//   return `https://example.com/${src}?w=${width}&q=${quality || 75}`
// }

class Home extends React.Component<Props, ContactState> {
  form = React.createRef<HTMLFormElement>();

  constructor(props: Props) {
    super(props);
  }
  componentDidMount(): void {
    setTimeout(() => {
      this.setState({ turnaround: true });
    }, 3000);
  }
  state: ContactState = {
    yourname: "",
    email: "",
    subject: "",
    message: "",
    turnaround: false,
  };
  handleChange = (event: { target: { name: string; value: string } }) => {
    let inputname: string = event.target.name;
    let inputvalue: string = event.target.value;
    if (inputname === "yourname") this.setState({ yourname: inputvalue });
    if (inputname === "email") this.setState({ email: inputvalue });
    if (inputname === "subject") this.setState({ subject: inputvalue });
    if (inputname === "message") this.setState({ message: inputvalue });
  };
  sendEmail = () => {
    console.log("submit");
    console.log(this.state.yourname);
    window.open(
      "mailto:aaronchupa610@gmail.com?subject=" +
        this.state.subject +
        "&body=" +
        this.state.message +
        "\n" +
        this.state.yourname
    );
  };
  render() {
    return (
      <>
        {this.state.turnaround === false ? (
          <Preloader></Preloader>
        ) : (
          <div>
            <Head>
              <title>My Web</title>
              <meta name="description" content="Generated by create next app" />
              <link rel="icon" href="/favicon.png" />
            </Head>

            <main
              className="glory-main-wraper relative"
              data-spy="scroll"
              data-target=".navbar"
              data-offset="70"
            >
              {/* ----------here-------  */}
              <div id="here" className="w-full h-[100vh] md:h-[700px] relative">
                <Header />
                <div className="grid grid-cols-1 md:grid-cols-2 h-[100vh] md:h-[700px] pt-[70px] relative z-10" style={{background: "black"}}>
                  <div className="flex justify-center items-center p-8 relative">
                    <div className="relative">
                      <p className="text-yellow-500 text-center text-26 md:text-40 font-medium p-4">
                        I&apos;m{" "}
                        <b className="text-32 md:text-60">
                          Oleksandr Lukianchuk
                        </b>
                      </p>
                      <div className="text-white text-center text-26 md:text-40 font-medium p-4">
                        5+ Years of Hands-On Experience
                      </div>
                      <div className="md:w-full flex justify-center mt-4">
                        {/* <button className="btn btn-here bg-white hover:bg-black border-2 border-white font-medium hover:text-white text-black px-6 py-3" type="submit" id="sendMessageButton"
                        style={{transition: "ease-out 0.3s",boxShadow: "rgba(0, 0, 0, 0.7) 3px 6px 5px"}}>Contact Me</button> */}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-start md:items-center relative p-8">
                    <div className="md:w-[300px] md:h-[300px] relative" style={{width: "100%", height: "100%"}}>
                      <iframe
                        src="https://sketchfab.com/models/894ad84ceb8b444a91fbc05f20530bcd/embed?autospin=1&autostart=1&annotations_visible=0&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_hint=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&ui_theme=dark&dnt=1%22className=%27absolute%20top-0%20left-0%20w-full%20h-full"
                        className="absolute top-0 left-0 w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* ----------about-------  */}
              {/* <div
                id="about"
                className="glory-about-me p-8 flex justify-center"
                style={{ backgroundColor: "rgb(0 0 0)" }}
              >
                <div style={{ maxWidth: "1200px" }}>
                  <div className="text-xl md:text-40 text-center text-gray-700 font-bold md:mt-8 mb-8">
                    ABOUT ME
                  </div>
                  <div className="md:flex md:items-center md:mb-8 ">
                    <div className="text-base md:text-lg font-medium text-gray-500 md:px-8 mb-4">
                      I&lsquo;m a web developer with experience working on small
                      and medium-sized business websites. All of my talents
                      include JavaScript, Python, Database and CI/CD. I like to
                      release digital products including websites by
                      myself/collaborating with a team, and I am good at
                      back-end development. In back-end development, Python
                      framework and Node.js framework are mainly used, with
                      Django, Express, and Nest.js being the most used. In
                      front-end development, I&lsquo;m familiar with Next.js and
                      Tailwind CSS. From start to finish, I&lsquo;ll be in
                      charge of everything. Let&lsquo;s remain in
                      touch!&ldquo;&ldquo; I cherish frequent communication a
                      lot.
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </div> */}

              {/* ----------portfolio-------  */}
              <div
                id="portfolio"
                className="glory-portfolio bg-transparent flex justify-center items-center p-8 relative"
              >
                <div className="w-full h-full z-10">
                  <div className="title w-full text-center font-bold text-32 md:text-45 text-white mb-8 md:mt-8">
                    My Excellent Portfolio
                  </div>
                  <div
                    id="portfolio-view"
                    // className='grid grid-cols-1 md:grid-cols-3 relative gap-8'
                    className="text-white bg-translate"
                  >
                    <Pagination />
                  </div>
                </div>
                <iframe
                  src="/resume"
                  className="absolute left-0 top-0 w-full h-full z-0"
                />
              </div>

              {/* ----------skill-------  */}
              <div
                id="skill"
                className="glory-skill p-8"
                style={{ backgroundColor: "rgb(0 0 0)" }}
              >
                <div className="title w-full text-center font-bold text-32 md:text-45 text-gray-700 pb-8 md:mt-8">
                  Skill Service
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5">
                  <div className="grid-cols-1 md:col-span-2 items-center">
                    <SkillViewChart />
                  </div>
                  <div className="grid-cols-1 md:col-span-3">
                    <SkillsText />
                  </div>
                  {/* <SkillsView/> */}
                </div>
              </div>

              {/* ----------contact-------  */}
              <div
                id="contact"
                className="glory-contact"
                style={{ backgroundColor: "rgb(0 0 0)" }}
              >
                <div className="md:flex items-center">
                  <div className="hidden md:block w-1/6"></div>
                  <div className="md:w-2/6 justify-center items-center p-8 h-[200px] md:h-[350px]">
                    {/* <img src='assets/img/contact.png' className='w-full h-full p-8'/> */}
                    <iframe src="/mailbox" className="w-full h-full " />
                  </div>
                  <div className="h-full w-full md:w-2/6 text-base font-medium text-white px-8 md:pt-8 pb-8 flex items-center justify-center">
                    <div className="contact-form w-full h-full">
                      <div id="success"></div>
                      <form
                        name="sentMessage w-full h-full"
                        id="contactForm"
                        ref={this.form}
                      >
                        <div className="control-group">
                          <input
                            type="text"
                            className="form-control"
                            name="yourname"
                            id="name"
                            placeholder="Your Name"
                            data-validation-required-message="Please enter your name"
                            onChange={this.handleChange.bind(this)}
                          />
                          <p className="help-block"></p>
                        </div>
                        <div className="control-group">
                          <input
                            type="text"
                            className="form-control"
                            name="subject"
                            id="subject"
                            placeholder="Subject"
                            data-validation-required-message="Please enter a subject"
                            onChange={this.handleChange.bind(this)}
                          />
                          <p className="help-block"></p>
                        </div>
                        <div className="control-group">
                          <textarea
                            className="form-control"
                            name="message"
                            id="message"
                            placeholder="Message"
                            data-validation-required-message="Please enter your message"
                            rows={3}
                            onChange={this.handleChange.bind(this)}
                          ></textarea>
                          <p className="help-block"></p>
                        </div>
                        <div className="mt-8 w-full flex justify-center md:justify-start">
                          <button
                            className="btn w-auto bg-white hover:bg-black border-2 border-white font-medium hover:text-white text-black px-6 py-2"
                            type="button"
                            id="sendMessageButton"
                            onClick={() => this.sendEmail()}
                            style={{ transition: "ease-out 0.3s" }}
                          >
                            Send Message
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="hidden md:block w-1/6"></div>
                </div>
              </div>

              {/* -- Back to top button -- */}
              <a href="#" className="btn back-to-top">
                <FaAngleUp />
              </a>
              <Footer />
            </main>
            {/* <Script src="assets/js/jquery-3.4.1.min.js"/> */}
            <Script src="https://code.jquery.com/jquery-3.4.1.min.js" />
            {/* <Script src="assets/lib/easing/easing.js"/> */}
            <Script src="assets/js/main.js" />
          </div>
        )}
      </>
    );
  }
}

export default Home;
