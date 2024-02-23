import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow">
  <nav className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
    <div className="flex justify-between items-center">
      <a href="#" className="text-xl font-semibold text-orange-500">RUNTEQ</a>
      <div className="md:flex ml-4"> {/* 中サイズ以上のビューポートでflexを適用 */}
        <a href="#" className="text-gray-800 mx-2">カリキュラム</a>
        <a href="#" className="text-gray-800 mx-2">就活対策</a>
        <a href="#" className="text-gray-800 mx-2">イベント</a>
        <a href="#" className="text-gray-800 mx-2">求人</a>
        <a href="#" className="text-gray-800 mx-2">その他</a>
      </div>
    </div>
    <div className="flex md:block"> {/* 中サイズ以上のビューポートでblockを適用 */}
      <button className="bg-orange-500 text-white px-4 py-2 rounded">無料体験</button>
      <button className="text-gray-800 ml-4">ログイン</button>
    </div>
  </nav>
</header>


  );
};

export default Header;