import { setState } from 'react';

const Hello = () => {
  const [greeting, setGreeting] = setState("こんにちは");

  return (
    <>
      <div className="p-3 mb-2 bg-primary text-white">
        Hello world!
      </div>
      <p className="mt-5 text-success">
        {greeting}
      </p>
    </>
  );
};

export default Hello;