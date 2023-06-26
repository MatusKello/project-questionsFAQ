import './Question.css';
import { useState } from 'react';
import { FaEllo } from 'react-icons/fa';

const Question = ({ title, info }) => {
  const [show, setShow] = useState(false);

  return (
    <div className='one-question'>
      <section>
        <h2>{title}</h2>
        <button onClick={() => setShow(!show)}>Odpoved</button>
      </section>{' '}
      <FaEllo className='my-icon' />
      {show && <p>{info}</p>}
    </div>
  );
};
export default Question;
