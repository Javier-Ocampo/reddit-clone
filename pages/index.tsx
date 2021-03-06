import type { NextPage } from 'next';
import Head from 'next/head';
import PostBox from '../components/PostBox';
import Feed from '../components/Feed';

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Reddit Clone</title>
      </Head>

      <PostBox />

      <div className='flex'>
        <Feed />
      </div>
    </div>
  )
}

export default Home
