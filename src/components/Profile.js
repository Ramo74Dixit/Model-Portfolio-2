import HeroText from "./HeroText";
import HeroImage from "./HeroImage";
import Footer from './Footer'
export default function Profile() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-grow">
        <div className="w-[89%] h-[80%]   mt-3 flex">
          <div className="w-[49%] items-center justify-center p-8">
            <h3 className="text-justify">
              1992/5/14生まれ、日本とカナダのハーフ。
            </h3>
            <h3 className="text-justify">16歳でファッションモデルデビュー。</h3>
            <h3 className="text-justify">
              デビュー1年目にしてフジテレビ“すぽると！”の
              <br />
              レギュラーに大抜擢される。
            </h3>
            <h3 className="text-justify">
              2013年に1st写真集、2015年には2nd写真集と
              <br />
              スタイルブックを同時発売、2018年に3rd写真集を発売。
            </h3>
            <h3 className="w-[60%] text-justify">
              2016年に、ViVi専属モデルを卒業し、“sweet”や“BAILA”“SENSE”など多数ファッション誌に出演中。
              <br />
              2019年、オリジナルプロテインCRASをプロデュース。
              <br />
              2020年には自身のコスメブランド「LAPERICUM」を設立し、
              <br />
              クリエイティブな分野でも活躍の場を広げている。
            </h3>
            <h3 className="text-justify">
              同年、車好きが高じて公式YouTubeチャンネル
              <br />
              「MAGGY‘s Beauty and the Speed」を開設し、
              <br />
              モデルのマギーとは異なった一面を見せている。
            </h3>
          </div>

          <div className="w-[51%]  bg-orange-400 bg-cover">
            <HeroImage />
          </div>
        </div>
        <div className="w-[10%]  ml-auto bg-[#F7D9C4]"></div>
      </div>
      <Footer/>
    </div>
  );
}
