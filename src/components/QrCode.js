import React from 'react'

const QrCode = () => {
  return (
    <div className="bg-gray-100 rounded-r-md flex flex-col items-center justify-center py-4">
      <div>
        <img
          className="w-48"
          src="https://qrtiger.com/temp/1659249090061.png"
          alt="qrCode-block"
        />
        <button className="bg-zinc-800 max-w-xs px-4 py-1 text-white rounded-sm mt-4 hover:bg-zinc-500 ">
          Download
        </button>
      </div>
    </div>
  )
}

export default QrCode
