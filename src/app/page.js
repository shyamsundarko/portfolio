'use client'
import Sidebar from './components/Sidebar'
import About from './components/About'
import '../styles/about.css'
export default function Home() {
  return (
    
    <div className="homePage">
      <Sidebar />
      <About />
    </div>
  );
}
