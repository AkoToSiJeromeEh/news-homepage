import "./App.css";
import { navLinksData, asideArticleData, sectionArticleData } from "./data";
import {
  Navbar,
  Section,
  NewestArticle,
  ArticleWrapper,
  TopArticle,
} from "./components";
import { mobileSecImg, desktopSecImg } from "./assets";
function App() {
  const articleElement = asideArticleData?.map((data, index) => (
    <NewestArticle
      key={index}
      title={data.title}
      description={data.description}
      index={index}
    />
  ));

  const topArticleElement = sectionArticleData?.map((data, index) => (
    <TopArticle
      key={index}
      image={data.image}
      description={data.description}
      title={data.title}
      index={index + 1}
    />
  ));

  return (
    <div className="  main-layout    " >
      <Navbar MenuItems={navLinksData} />
      <Section style="grid grid-cols-3 h-fit gap-16 Tablet:gap-8 w-full Desktop:w-[70rem] m-auto px-5 py-5 Desktop:px-0   ">
        <ArticleWrapper style=" col-span-3 Tablet:col-span-2  ">
          <picture>
            <source media="(max-width: 900px)" srcSet={mobileSecImg} />
            <img
              className=" w-full h-full object-cover"
              src={desktopSecImg}
              alt=""
            />
          </picture>

          <div className="article-cont grid grid-cols-1 Tablet:grid-cols-2 gap-6 mt-8 ">
            <h1 className="text-6xl  font-bold">
              The Bright Future of Web 3.0?
            </h1>
            <div className=" flex flex-col gap-8 items-start">
              <p className="  text-dark-grayish-blue font-medium leading-6 max-w-[36ch]">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button
                className=" uppercase  bg-soft-red text-off-white font-bold p-[0.7rem_2rem] 
            tracking-[0.39em] hover:bg-very-dark-blue transition-colors"
              >
                Read More
              </button>
            </div>
          </div>
        </ArticleWrapper>

        <aside className="    bg-very-dark-blue col-span-3 Tablet:col-span-1   ">
         <div className=" m-5 flex flex-col ">
         <h1 className=" text-soft-orange font-bold text-4xl">New</h1>
          {articleElement}
         </div>
        </aside>

        <div className=" top-article-cont col-span-3 grid grid-cols-1 Tablet:grid-cols-3 gap-8 mt-5">
          {topArticleElement}
        </div>
      </Section>

    </div>
  );
}

export default App;
