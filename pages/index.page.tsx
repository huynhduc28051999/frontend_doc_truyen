import type { NextPage } from 'next'
import Head from 'next/head'
import resumeData from '../resume.json';
import BasicInfo from '@/components/BasicInfo';

const Home: NextPage = () => {
  return (
    <div className='main-content container-xl mx-auto p-3'>
      <Head>
        <title>{resumeData.basics.name}</title>
        <meta name="description" content={resumeData.basics.name} />
        <link href='http://fonts.googleapis.com/css?family=Lato:400,700' rel='stylesheet' type='text/css' />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-4'>
        <div>
          <BasicInfo {...resumeData.basics} />
        </div>
      </div>
    </div>
  )
}

export default Home
