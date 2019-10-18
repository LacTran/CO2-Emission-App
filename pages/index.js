import Link from 'next/link';

const Index = () => (
  <div>
    <Link href='/welcome'>
      <button>Login</button>
    </Link>
    <style jsx>{`
    div{
      box-sizing: border-box;
      height: 100%;
      width:100vw;
      min-height: 100vh;
      display: flex;
      flex-direction:column;
      justify-content: center;
      align-items: center;
      background: #7CD0F9;
    }
    button{
      color: rgba(0, 0, 0, 0.87);
      padding: 6px 16px;
      font-size: 0.875rem;
      min-width: 64px;
      box-sizing: border-box;
      transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      font-family: "Roboto", "Helvetica", "Arial", sans-serif;
      font-weight: 500;
      line-height: 1.75;
      border-radius: 4px;
      letter-spacing: 0.02857em;
      text-transform: uppercase;
      background: transparent;
      border: none;
    }
    `}</style>
  </div>
);

export default Index;