import { FC, useEffect, useRef, useState } from 'react';
import { Player } from '../models/Player';
import { Colors } from '../models/Colors';

interface TimerProps {
  currentPlayer: Player | null;
  restart: () => void;
}

const Timer: FC<TimerProps> = ({ currentPlayer, restart }) => {
  const [blackTime, setBlackTime] = useState(300);
  const [whiteTime, setWhiteTime] = useState(300);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    startTimer();
  }, [currentPlayer]);

  function startTimer() {
    if (timer.current) {
      clearInterval(timer.current);
    }
    const callback =
      currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer;
    timer.current = setInterval(callback, 1000);
  }

  function decrementBlackTimer() {
    setBlackTime((prev) => prev - 1);
  }
  function decrementWhiteTimer() {
    setWhiteTime((prev) => prev - 1);
  }

  const handleRestart = () => {
    setWhiteTime(300);
    setBlackTime(300);
    restart();
  };

  return (
    <div
      style={{
        padding: '15px',
        marginTop: '10px',
        marginLeft: '45%',
        color: '#57010c',
      }}
    >
      <div>
        <button
          style={{
            padding: '10px',
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.89)',
            background: '#57010c',
            border: 'none',
            borderRadius: '5px',
          }}
          onClick={handleRestart}
        >
          <span>Restart game</span>
        </button>
      </div>
      <h2 style={{ fontSize: '24px', marginTop: '10px' }}>Черные - {blackTime}</h2>
      <h2 style={{ fontSize: '24px', marginTop: '5px' }}>Белые - {whiteTime}</h2>
    </div>
  );
};

export default Timer;
