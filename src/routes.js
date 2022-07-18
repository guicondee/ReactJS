import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Repository from './pages/Repository';

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact component={Main} />
        <Route path="/repository" component={Repository} />
      </Routes>
    </BrowserRouter>
  );
}
