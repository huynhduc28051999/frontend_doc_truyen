import type { NextPage } from 'next'
import MainLayout from '@/components/layout/mainLayout';
import TopGroup from '@/components/TopGroup';
import DailyRecentViews from './home/DailyRecentViews';
import LastChapper from './home/LastChapper';

const Home: NextPage = () => {
  return (
    <MainLayout customClass="home-page">
      <TopGroup />
      <DailyRecentViews />
      <LastChapper />
    </MainLayout>
  )
}

export default Home
