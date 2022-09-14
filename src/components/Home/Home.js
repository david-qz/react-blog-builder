import { useState } from 'react';

import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [font, setFont] = useState('architect');
  const [alignment, setAlignment] = useState('left');

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview title={title} subtitle={subtitle} font={font} alignment={alignment} />
      <Editor
        title={title} setTitle={setTitle}
        subtitle={subtitle} setSubtitle={setSubtitle}
        font={font} setFont={setFont}
        setAlignment={setAlignment}
      />
    </main>
  );
}
