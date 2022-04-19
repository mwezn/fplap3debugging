import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
//Switch replaced to Routes in react-router-dom v6
import { NavBar } from './components';
import { Welcome, About, Search} from './pages'



function App() {
    return (
        <BrowserRouter>
        <div id="app">
            <NavBar />
            <main>
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/about" element={<About />}/>
                    <Route path="/search" element={<Search />}/>
                </Routes>
            </main>
        </div>
        </BrowserRouter>
    )
}

export default App;