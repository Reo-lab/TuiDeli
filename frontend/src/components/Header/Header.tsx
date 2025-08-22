
function Header(){
    return(
      <header className="h-[100px] bg-[#2e2e2e] text-white px-8 flex justify-between items-center">
        <div>
          <p className="text-white-500 text-lg">ついでにデリバリー</p>
          <p className="text-white-500 pl-5 text-4xl font-bold subpixel-antialiased">ついデリ</p>
        </div>
        <div className="flex gap-4">
        <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">
          依頼する
        </button>
        <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">
          配達する
        </button>
        <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300">
          ログイン
        </button>
      </div>
      </header> 
    )
}

export default Header