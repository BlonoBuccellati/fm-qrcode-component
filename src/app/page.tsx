import QrCodeCard from './_components/qr-code-card';

export default function Home() {
  return (
    <div className='flex justify-center items-center bg-slate-300 h-screen'>
      {/* カード */}
      <QrCodeCard />
    </div>
  );
}
