/* eslint-disable no-const-assign */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Game from './Game';

export default function ClassSection(props) {
  const { close, nums, plus, minus, sessionId } = props;
  return (
    <div>
      <button type="button" onClick={close}>
        종료
      </button>
      <div className="flex p-3 text-3xl space-x-5">
        <button
          type="button"
          onClick={plus}
          className="border-black border-2 p-3"
        >
          +
        </button>
        <div className="p-3">{nums}</div>
        <button
          type="button"
          onClick={minus}
          className="border-black border-2 p-3"
        >
          -
        </button>
      </div>
      <Game sessionId={sessionId} />
    </div>
  );
}
