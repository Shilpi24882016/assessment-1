import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import JobBoard from './components/JobBoard'

function App() {
  const jobs = [
    {
      post: "Senior Frontend Dev",
      company: "Techflow / Remote",
      salary: "$140k"
    },
    {
      post: "Product Designer",
      company: "Pixel Perfect / NYC",
      salary: "$120k"
    },
    {
      post: "DevOps Engineer",
      company: "Cloud Scale / Austin, TX",
      salary: "$150k"
    },
    {
      post: "Backend Architect",
      company: "DataStream / Remote",
      salary: "$160k"
    }
  ];

  return (
    <div>
      <Header />
      <Main />
      <JobBoard jobs={jobs} /> {/* ✅ FIXED */}
      <Footer />
    </div>
  )
}

export default App