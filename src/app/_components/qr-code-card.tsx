import Image from 'next/image';

export default function QrCodeCard() {
  return (
    <div className='flex flex-col justify-center items-center gap-6 bg-white rounded-xl pt-4 pb-10 px-4 w-[320px] h-[499px]'>
      {/* QR Image */}
      <Image
        src='/images/image-qr-code.png'
        alt='QRコード画像'
        width={290}
        height={290}
        className='rounded-xl'
      />
      {/* Text */}
      <div className='flex flex-col px-4 w-72 h-[131px] gap-3'>
        <h2 className='text-slate-900 font-bold text-[22px] text-center leading-tight'>
          Improve your front-end
          <br /> skills by building projects
        </h2>
        <p className='text-slate-500 text-center text-[15px]'>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}
