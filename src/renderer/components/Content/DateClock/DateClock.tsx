import React, { useState, useEffect } from 'react';

function CurrentDateTime() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const options = { weekday: 'long' };
  const weekday = dateTime.toLocaleString('zh-CN', options);

  return (
    <div>
      {`${dateTime.toLocaleDateString()}, ${weekday}, ${dateTime.toLocaleTimeString()}`}
    </div>
  );
}

export default CurrentDateTime;
