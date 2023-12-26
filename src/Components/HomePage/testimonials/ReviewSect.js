import React from "react";
import "./reviewSect.css";
import reviewer from "../homePageAssets/images/reviewer.png";

function ReviewSect() {
  return (
    <div>
      <div className="flex-column reviewSectDiv">
        <h3>Happy Customers</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adi pisi cing elit, sed do
          eiusmod tempor exercitationemut labore.
        </p>
      </div>
      <div className="outerdiv">
        <div className="innerdiv">
          <div className="div1 eachdiv">
            <div className="userdetails">
              <div className="imgbox">
                <img src={reviewer} alt="ok img" />
              </div>
              <div className="detbox">
                <p className="name">Daniel Clifford</p>
                <p className="designation">Verified Graduate</p>
              </div>
            </div>
            <div className="review">
              <h4>
                I received a job offer mid-course, and the subjects I learned
                were current, if not more so, in the company I joined. I
                honestly feel I got every penny’s worth.
              </h4>
              <p>
                “ I was an EMT for many years before I joined the bootcamp. I’ve
                been looking to make a transition and have heard some people who
                had an amazing experience here. I signed up for the free intro
                course and found it incredibly fun! I enrolled shortly
                thereafter. The next 12 weeks was the best - and most grueling -
                time of my life. Since completing the course, I’ve successfully
                switched careers, working as a Software Engineer at a VR
                startup. ”
              </p>
            </div>
          </div>

          <div className="div2 eachdiv">
            <div className="userdetails">
              <div className="imgbox">
                <img src={reviewer} alt="hello " />
              </div>
              <div className="detbox">
                <p className="name">Jonathan Walters</p>
                <p className="designation">Verified Graduate</p>
              </div>
            </div>
            <div className="review">
              <h4>The team was very supportive and kept me motivated</h4>
              <p>
                “ I started as a total newbie with virtually no coding skills. I
                now work as a mobile engineer for a big company. This was one of
                the best investments I’ve made in myself. ”
              </p>
            </div>
          </div>

          <div className="div3 eachdiv">
            <div className="userdetails">
              <div className="imgbox">
                <img src={reviewer} alt="reviewer" />
              </div>
              <div className="detbox">
                <p className="name dark">Kira Whittle</p>
                <p className="designation dark">Verified Graduate</p>
              </div>
            </div>
            <div className="review dark">
              <h4>Such a life-changing experience. Highly recommended!</h4>
              <p>
                “ Before joining the bootcamp, I’ve never written a line of
                code. I needed some structure from professionals who can help me
                learn programming step by step. I was encouraged to enroll by a
                former student of theirs who can only say wonderful things about
                the program. The entire curriculum and staff did not disappoint.
                They were very hands-on and I never had to wait long for
                assistance. The agile team project, in particular, was
                outstanding. It took my learning to the next level in a way that
                no tutorial could ever have. In fact, I’ve often referred to it
                during interviews as an example of experience.
              </p>
            </div>
          </div>

          <div className="div4 eachdiv">
            <div className="userdetails">
              <div className="imgbox">
                <img src={reviewer} alt="resdvmn" />
              </div>
              <div className="detbox">
                <p className="name dark">Jeanette Harmon</p>
                <p className="designation dark">Verified Graduate</p>
              </div>
            </div>
            <div className="review dark">
              <h4>An overall wonderful and rewarding experience</h4>
              <p>
                “ Thank you for the wonderful experience! I now have a job I
                really enjoy, and make a good living while doing something I
                love. ”
              </p>
            </div>
          </div>

          <div className="div5 eachdiv">
            <div className="userdetails">
              <div className="imgbox">
                <img src={reviewer} alt="rsvnkreviewer" />
              </div>
              <div className="detbox">
                <p className="name">Patrick Abrams</p>
                <p className="designation">Verified Graduate</p>
              </div>
            </div>
            <div className="review">
              <h4>
                Awesome teaching support from TAs who did the bootcamp
                themselves. Getting guidance from them and learning from their
                experiences was easy.
              </h4>
              <p>
                “ The staff seem genuinely concerned about my progress which I
                find really refreshing. The program gave me the confidence
                necessary to be able to go out in the world and present myself
                as a capable junior developer. The standard is above the rest.
                You will get the personal attention you need from an incredible
                community of smart and amazing people. ”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewSect;
