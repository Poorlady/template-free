import Head from "next/head"
import SectionTitle from "../components/sectionTitle"

const Home = () => {
  return (
    <>
      <Head>
        <title>Nextly - Provisioning team 5</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SectionTitle
        pretitle="Provisioning FE Team 5"
        title="Ini hasil workshop dari team 5">
        Menggunakan template nextly untuk pelaksanaan workshop Provisioning
      </SectionTitle>
    </>
  )
}

export default Home