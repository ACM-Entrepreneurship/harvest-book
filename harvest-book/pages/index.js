import Image from 'next/legacy/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import styles from '../styles/home.module.css'
import Head from 'next/head';
import {useNavigate} from 'react-router-dom';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap" rel="stylesheet" />
      </Head>
      <Layout>
      <div className={styles.titlebox}>
          <Image src='/../public/images/harvest_book_page.png' layout="fill" height="1000"></Image>
          <div className={styles.titlebg}></div>
          <h1 className={styles.titleText}>Harvest Book</h1>
          <div className={styles.titlebg2}></div>
          <p id={styles.titleInfo}>From farm to table to those in need: <strong id={styles.titleColor}>Harvest Book</strong></p>
      </div>
      <div className={styles.perksRow}>
          <h1 id={styles.perkInfoTitle}>What we do?</h1>
          <div className={styles.perk1}>
            <Image src='/../public/food_tax.png' width="300" height="300"></Image>
            <h1 className={styles.perkText}>Save on Taxes</h1>
          </div>
          <div className={styles.perk2}>
            <Image src='/../public/food_waste_icon.png' width="300" height="300"></Image>
            <h1 className={styles.perkText}>Minimize Food Waste</h1>
          </div>
          <div className={styles.perk3}>
            <Image src='/../public/food_sharing_icon.png' width="300" height="300"></Image>
            <h1 className={styles.perkText}>Combat Food Scarity</h1>
          </div>
      </div>
      <div className={styles.whitespace}></div>

      <h1 id={styles.charInfoTitle}>Charities</h1>

      <div className="d-flex flex-wrap justify-content-center mx-auto">
        <div class="card m-3" style={{ width: '22%' }}>
          <Image src="/../public/images/the-rolla-mission.png" class="card-img-top" alt="..." width={400} height={400} />
          <div class="card-body">
            <h5 class="card-title">The Rolla Mission</h5>
            <p class="card-text">708 N Main St, Rolla, MO 65401 </p>
            <a href="https://www.therollamission.org/" target="_blank" rel="noopener noreferrer" class="btn btn-success">Learn more</a>
          </div>
        </div>
        <div class="card m-3" style={{ width: '22%' }}>
          <Image src="/../public/images/feed-my-people.png" class="card-img-top" alt="..." width={400} height={400} />
          <div class="card-body">
            <h5 class="card-title">Feed My People</h5>
            <p class="card-text">171 Kingston Dr, St. Louis, MO 63125 </p>
            <a href="https://www.feed-my-people.org/" target="_blank" rel="noopener noreferrer" class="btn btn-success">Learn more</a>
          </div>
        </div>
        <div class="card m-3" style={{ width: '22%' }}>
          <Image src="/../public/images/harvesters.jpg" class="card-img-top" alt="..." width={400} height={400} />
          <div class="card-body">
            <h5 class="card-title">Harvesters</h5>
            <p class="card-text">3801 Topping Ave, Kansas City, MO 64129 </p>
            <a href="https://www.harvesters.org/" target="_blank" rel="noopener noreferrer" class="btn btn-success">Learn more</a>
          </div>
        </div>
        <div class="card m-3" style={{ width: '22%' }}>
          <Image src="/../public/images/c-of-c.png" class="card-img-top" alt="..." width={400} height={400} />
          <div class="card-body">
            <h5 class="card-title">Circle of Concern</h5>
            <p class="card-text">112 St Louis Ave, Valley Park, MO 63088</p>
            <a href="https://www.circleofconcern.org/" target="_blank" rel="noopener noreferrer" class="btn btn-success">Learn more</a>
          </div>
        </div>
      </div>
      </Layout>
    </>
  )
}

