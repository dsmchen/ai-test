import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import SkipLink from './components/SkipLink'
import Header from './components/Header'
import Hero from './components/Hero'
import AnimateOnScroll from './components/AnimateOnScroll'

const About = lazy(() => import('./components/About'))
const Projects = lazy(() => import('./components/Projects'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

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
        <Suspense fallback={null}>
          <AnimateOnScroll animation="animate-fade-up"><About /></AnimateOnScroll>
        </Suspense>
        <Suspense fallback={null}>
          <AnimateOnScroll animation="animate-scale-in"><Projects /></AnimateOnScroll>
        </Suspense>
        <Suspense fallback={null}>
          <AnimateOnScroll animation="animate-fade-up"><Contact /></AnimateOnScroll>
        </Suspense>
      </main>
      <Suspense fallback={null}><Footer /></Suspense>
    </>
  )
}

export default App
