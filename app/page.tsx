import Image from "next/image";
import Timecard from "./component/timecard/QrReaderImage";
import { NextPage } from "next";
import { QRCodeSVG } from "qrcode.react"
import QRCodeScanner from "./component/qrcodeScanner/QRCodeScanner";
import QrReaderImage from "./component/timecard/QrReaderImage";

const Home: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    <div className=" aspect-square h-72 w-72 rounded-md bg-white p-4">
      <div>
        <div>
          <QRCodeSVG value={`http://localhost:3000/result`} size={224}/>
        </div>
        <p className=" mt-8 text-center text-sm text-gray-500">QRコードをスキャン</p>
        <div className=" bg-white p-4 rounded-md">
          <QRCodeScanner />
        </div>
        <p className=" mt-8 text-center text-sm text-gray-500">QRコードをスキャン</p>
        <div className=" bg-white p-4 rounded-md">

          <QrReaderImage />
        </div>
      </div>
    </div>
    </main>
  );
}

export default Home
