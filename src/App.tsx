import { Helmet } from 'react-helmet-async'
import SkipLink from './components/SkipLink'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Helmet>
        <title>Doris — Frontend Engineer</title>
        <meta name="description" content="Frontend engineer building modern, performant web experiences with React and TypeScript." />
      </Helmet>
      <SkipLink />
      <Header />
      <main id="main-content" className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
