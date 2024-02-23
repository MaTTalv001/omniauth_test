import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-400">
      <div className="container  px-6 py-10">
        <div className="flex flex-col items-left">
          <div className="py-2">
            <div className="text-white mb-2">RUNTECKER(ランテッカー)
              <div className="flex">
                <a href="#" className="text-white mx-2">運営サービスについて</a>
              </div>
              <div className="flex">
                <a href="#" className="text-white mx-2">運営会社</a>
                <a href="#" className="text-white mx-2">利用規約</a>
                <a href="#" className="text-white mx-2">個別商取引法に基づく表記</a>
                <a href="#" className="text-white mx-2">お問い合わせ</a>
              </div>
            </div>
          </div>
          <div className="text-sm text-white">
            © F_Taka Revolution Inc. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;