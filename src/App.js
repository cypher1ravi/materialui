
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Container from '@mui/material/Container';
import Navbar from './components/Nvbar';
import Details from './components/Details';
import Home from './components/Home';
import Preview from './components/Preview';
import About from './components/About';
import PersonalInfo from './components/details/PersonalInfo';
import WorkExperience from './components/details/WorkExperience';
import KeySkill from './components/details/KeySkill';
import Education from './components/details/Education';





function App() {
  return (
    <>
      <Navbar />

      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='details' element={<Details />} >
            <Route index element={<PersonalInfo />} />
            <Route path='workExperience' element={<WorkExperience />} />
            <Route path='education' element={<Education />} />
            <Route path='keySkills' element={<KeySkill />} />
          </Route>
          <Route path='preview' element={<Preview />} />
          <Route path='about' element={<About />} />


        </Routes >
      </Container>
    </>
  );
}

export default App;
