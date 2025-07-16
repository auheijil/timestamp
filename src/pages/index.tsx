import Head from 'next/head'
import dynamic from 'next/dynamic'
import { GetServerSideProps } from 'next'
import { TimeZoneProvider } from '../contexts/TimeZoneContext'
import EnhancedTimestampConverter from '../components/EnhancedTimestampConverter'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <Head>
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-J9B0CDD2T2"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-J9B0CDD2T2');
        </script>
        <link rel="icon" href="/icon/favicon.ico"/>
        <link rel="icon" type="image/png" href="/icon/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://Timestamp.lol/" />
        <title>Unix timestamp to date converter free online</title>
        <meta name="description" content="Epoch and unix timestamp converter free. Date and time function timestamp for various programming languages. Use it now." />
      </Head>
      <h1 className="text-4xl font-bold mb-6 text-center">Unix timestamp to date and datetime to timestamp Converter</h1>
      <h2 className="text-xl font-semibold mb-4 text-center">Free unix timestamp and epoch time to date tool. Supports Epoch unix time in seconds and minutes.</h2>
      <EnhancedTimestampConverter />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} }
}
