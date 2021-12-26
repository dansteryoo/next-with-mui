import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ViewContainer from 'components/ViewContainer';
import styles from 'styles/Home.module.scss';
import Image from 'next/image';
import BrushedText from 'components/BrushedText';

export default function Home() {
  const router = useRouter();
  const [tempEmail, setTempEmail] = useState('');

  const handleSubmit = (value) => {
    setTempEmail(value.email);
    console.log({ tempEmail });
    window.scrollTo(0, 0);
    router.push('/contact');
  };

  return (
    <ViewContainer>
      <Head>
        <title>Off the Pulpit Podcast.</title>
        <meta name="description" content="Off the Pulpit Podcast." />
      </Head>
      <div className={styles.HomePage}>
        <div className={styles.banner}>Banner</div>

        <section className={styles.partners}>
          <div className={styles.partners_header}>
            <header>
              <h2>Our Partners</h2>
              <p>
                We support students directly and partner with high schools and
                community organizations.
              </p>
            </header>
          </div>

          <div className={styles.partners_client_logos}>
            <div className={styles.partners_client_logo}>
              <Image layout="fill" src="/tilt/butler.png" alt="butler logo" />
              <p>
                <span>Noble Butler</span>
                <br />
                <span>(Chicago, IL)</span>
              </p>
            </div>

            <div className={styles.partners_client_logo}>
              <Image
                layout="fill"
                src="/tilt/solorio.svg"
                className={styles.solorio_logo}
                alt="solorio logo"
              />
              <p>
                <span>Eric Solorio High School</span>
                <br />
                <span>(Chicago, IL)</span>
              </p>
            </div>

            <div className={styles.partners_client_logo}>
              <Image
                layout="fill"
                src="/tilt/hfs.svg"
                className={styles.hfs_logo}
                alt="hfs logo"
              />
              <p>
                <span>HFS Chicago Scholars</span>
                <br />
                <span>(Chicago, IL)</span>
              </p>
            </div>

            <div className={styles.partners_client_logo}>
              <Image
                layout="fill"
                src="/tilt/westinghouse.png"
                className={styles.westinghouse_logo}
                alt="westinghouse logo"
              />
              <p>
                <span>Westinghouse College Prep</span>
                <br />
                <span>(Chicago, IL)</span>
              </p>
            </div>
            <div
              style={{ minWidth: '10px' }}
              className={styles.mobile_padding}
            />
          </div>
        </section>

        <section className={`${styles.join_tilt}`}>JoinTilt</section>

        <section
          className={`${styles.HomePage__duo} ${styles.HomePage__duo_binoculars}`}
        >
          <div className={styles.text}>
            <h2>
              <span>Find &#38; select </span>
              <BrushedText text="affordable" /> <span>colleges</span>
            </h2>
            <p>
              Based on your background, we can help you find colleges that are
              likely to offer you grants and scholarships.
            </p>
            <div className={styles.get_started}>
              <button
                design="secondary"
                color="purple"
                onClick={() => console.log('click')}
              >
                Get Started
              </button>
            </div>
          </div>
          <div className={styles.image}>
            BinocularsSVG
            <div className={styles.get_started}>
              <button
                color="purple"
                design="secondary"
                onClick={() => console.log('click')}
              >
                Get Started
              </button>
            </div>
          </div>
        </section>

        <section
          className={`${styles.HomePage__duo} ${styles.HomePage__duo_document}`}
        >
          <div className={styles.image}>
            DocumentSVG
            <div className={styles.get_started}>
              <button
                design="secondary"
                color="orange"
                onClick={() => console.log('click')}
              >
                Get Started
              </button>
            </div>
          </div>
          <div className={styles.text}>
            <h2>
              <span>Get help applying to</span>
              <br />
              <BrushedText text="financial" /> <span>aid</span>
            </h2>
            <p>
              We will walk you through how to fill out financial aid forms and
              compare your financial aid packages once you have been accepted.
            </p>
            <div className={styles.get_started}>
              <button
                color="orange"
                design="secondary"
                onClick={() => console.log('click')}
              >
                Get Started
              </button>
            </div>
          </div>
        </section>

        <section
          className={`${styles.HomePage__duo} ${styles.HomePage__duo_support}`}
        >
          <div className={styles.text}>
            <h2>
              <span>On-demand</span> <BrushedText text="advisors" />{' '}
              <span>to answer questions</span>
            </h2>
            <p>
              We know that figuring out how to pay for college can be confusing
              and overwhelming—thats why youll always have access to our
              advisors who are ready to answer your questions.
            </p>
            <div className={styles.get_started}>
              <button
                color="purple"
                design="secondary"
                onClick={() => console.log('click')}
              >
                Get Started
              </button>
            </div>
          </div>
          <div className={styles.image}>
            SupportSVG
            <div className={styles.get_started}>
              <button
                design="secondary"
                color="purple"
                classes={['purple', 'secondary']}
                onClick={() => console.log('click')}
              >
                Get Started
              </button>
            </div>
          </div>
        </section>

        <section
          className={`${styles.HomePage__duo} ${styles.HomePage__duo_database}`}
        >
          <div className={styles.image}>
            ComputerSVG
            <div className={styles.get_started}>
              <button
                color="orange"
                design="secondary"
                onClick={() => console.log('click')}
              >
                Get Started
              </button>
            </div>
          </div>
          <div className={styles.text}>
            <h2>
              <span>Database of </span>
              <BrushedText text="quality" /> <span>scholarships</span>
            </h2>
            <p>
              We find and evaluate scholarships offered across the country to
              make sure they are legitimate, so you DocumentSVG have to.
            </p>
            <div className={styles.get_started}>
              <button
                color="orange"
                design="secondary"
                onClick={() => console.log('click')}
              >
                Get Started
              </button>
            </div>
          </div>
        </section>

        <section className={styles.testimonials}>Testimonials</section>

        <section className={styles.faq_section}>FaqSection</section>

        <section className={styles.purple_box}>
          <div className={styles.purple_box_organization}>
            <div className={styles.text}>
              <h2>Become a partner</h2>
              <p>
                Interested in bringing Tilt to your school or community
                organization?
              </p>
            </div>

            <input
              styles={styles}
              color="white"
              inputid="purple-box-email"
              handlesubmit={handleSubmit}
              buttonText="Contact Us"
            />
          </div>

          <div className={styles.purple_box_divider} />

          <div className={styles.purple_box_features}>
            <ul className={styles.features_list}>
              <li>
                <div>
                  <svg
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 6.5L6 10L12 2"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>{' '}
                Access to student accounts
              </li>
              <li>
                <div>
                  <svg
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 6.5L6 10L12 2"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>{' '}
                Customized reporting
              </li>
              <li>
                <div>
                  <svg
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 6.5L6 10L12 2"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>{' '}
                Satisfaction guarantee
              </li>
            </ul>

            <input
              color="white"
              inputid="purple-box-email-mobile"
              buttonText="Contact Us"
              handlesubmit={handleSubmit}
            />
          </div>
        </section>
      </div>
      Footer
    </ViewContainer>
  );
}
