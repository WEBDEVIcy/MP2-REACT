import React, { useState } from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";
import aboutImg2 from "../../images/about-img2.jpg";
import aboutImg3 from "../../images/about-img3.jpg";

const About = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleText = (sectionId) => {
    if (expandedSection === sectionId) {
      setExpandedSection(null);
    } else {
      setExpandedSection(sectionId);
    }
  };

  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2 className='text'>About</h2>
          <h3>Know more About Inkverse</h3>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src={aboutImg} alt='' />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>Inkverse</h2>
            <p className='fs-17'>
              Inkverse is a captivating book website that offers a diverse collection of literary treasures, providing avid readers with a haven to explore multiple genres and immerse themselves in captivating narratives. With an intuitive and user-friendly interface, Inkverse invites bookworms to embark on a delightful journey through its digital library.
            </p>
            {expandedSection === 'section1' ? (
              <React.Fragment>
                <p className='fs-17'>
                  From gripping thrillers to heartwarming romances, thought-provoking non-fiction to fantastical adventures, Inkverse caters to a wide range of literary preferences, ensuring that there is something for every reader to indulge in. Whether you prefer to curl up with a book on a cozy evening or dive into a captivating story during your commute, Inkverse's accessible platform allows you to enjoy your favorite books anytime and anywhere. So, lose yourself in the enchanting world of Inkverse and let your imagination soar with each turn of the virtual page. With Inkverse, the joy of reading knows no bounds. This innovative book website offers an immersive experience where book lovers can not only read captivating stories but also connect with fellow readers and authors. Inkverse's vibrant community provides a platform for meaningful discussions, book recommendations, and even opportunities to interact with your favorite writers. The website's comprehensive library constantly expands, featuring both well-known authors and hidden gems waiting to be discovered. Whether you're seeking an escape into a different world, expanding your knowledge, or simply looking for a new adventure, Inkverse is your gateway to a limitless universe of books. So, join the literary adventure and let Inkverse ignite your passion for reading in ways you never imagined.
                </p>
                <button className='read-more-btn' onClick={() => toggleText('section1')}>
                  Read Less
                </button>
              </React.Fragment>
            ) : (
              <button className='read-more-btn' onClick={() => toggleText('section1')}>
                Read More
              </button>
            )}
          </div>
        </div>

        <div className='about-content grid reverse'>
          <div className='about-text content-center'>
            <h2 className='about-title fs-26 ls-1'>Genre</h2>
            <p className='fs-17'>
              Inkverse is a captivating literary realm that embraces a multitude of genres, offering enchanting worlds for readers to explore. From fantasy with mythical creatures and epic quests, to chilling horror realms and suspenseful mysteries, Inkverse immerses genre enthusiasts. Dive into science fiction's distant galaxies and advanced technologies, or get lost in the thrilling twists of suspense.
            </p>
            {expandedSection === 'section2' ? (
              <React.Fragment>
                <p className='fs-17'>
                  Whether you crave romance, intellectual stimulation, or adrenaline-pumping adventure, Inkverse invites you on a tailored literary journey, opening doors to boundless imagination and endless possibilities.
                </p>
                <button className='read-more-btn' onClick={() => toggleText('section2')} style={{ marginLeft: '130px' }}>
                  Read Less
                </button>
              </React.Fragment>
            ) : (
              <button className='read-more-btn' onClick={() => toggleText('section2')} style={{ marginLeft: '130px' }}>
                Read More
              </button>
            )}
          </div>
          <div className='about-img' style={{ marginLeft: '30px' }}>
            <img src={aboutImg2} alt='' />
          </div>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src={aboutImg3} alt='' />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>Updated</h2>
            <p className='fs-17'>
              The inkverse has recently received an update, bringing forth exciting changes and additions. As part of this update, all the new books have been included, making it a haven for book enthusiasts. Within the inkverse's virtual shelves, you'll find a vast collection of captivating stories, informative non-fiction, and enchanting poetry.
            </p>
            {expandedSection === 'section3' ? (
              <React.Fragment>
                <p className='fs-17'>
                  The sentence 'The inkverse is updated, all the new book is here' perfectly encapsulates the essence of this literary realm, inviting readers to immerse themselves in its ever-growing offerings.
                </p>
                <button className='read-more-btn' onClick={() => toggleText('section3')}>
                  Read Less
                </button>
              </React.Fragment>
            ) : (
              <button className='read-more-btn' onClick={() => toggleText('section3')}>
                Read More
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
