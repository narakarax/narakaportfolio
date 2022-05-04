import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import SlideImgItem from './SlideImgItem';
// Example items, to simulate fetching from another resources.
var items = [  
    <SlideImgItem imgURL={"/assets/img/portfolio/mnting_nft.png"} imgLink={"https://nftest-sandy.vercel.app/"} skillContent={"React + React Hook + TypeScript + Node.js + TailwindCSS + SCSS + GraphQL"} key="" />,
    <SlideImgItem imgURL={"/assets/img/portfolio/hapeio.png"} imgLink={"https://hape.io/"} skillContent={"React + Solidity + Node.js + Three.js + Express.js + MongoDB"} key="2" />,
    <SlideImgItem imgURL={"/assets/img/portfolio/First page.png"} imgLink={"http://gamesite-eight.vercel.app"} skillContent={"Three.js + WebGL"} key="3" />,
    <SlideImgItem imgURL={"/assets/img/portfolio/Image 14.png"} imgLink={"https://museudastoninhas.com.br/o-museu-virtual/"} skillContent={"Web Virtual Reality : VR + WebGL + Next.js + TypeScript + Node.js"} key="4" />,
    <SlideImgItem imgURL={"/assets/img/portfolio/nftmarket place.png"} imgLink={"https://exoworlds.io/"} skillContent={"Blockchain site : Smart contract + Next.js + TypeScript + Node.js"} key="5" />,
    <SlideImgItem imgURL={"/assets/img/portfolio/First.png"} imgLink={"https://droppgroup.com/"} skillContent={"Company site : Rewact + D3.js + Typescript + Node.js +"} key="6" />,
  ];                
function Items({ currentItems }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 relative gap-8'>
      {currentItems &&
        currentItems.map(( item: any) => (
          <div key={item.key}>
            {item}
          </div>
        ))}
    </div>
  );
}

function PaginatedItems({ itemsPerPage }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number; }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default function SkillsView(){
  return (
    <>
      <div className='hidden md:block'>
        <PaginatedItems itemsPerPage={6}/>
      </div>
      <div className='md:hidden'>
        <PaginatedItems itemsPerPage={100}/>
      </div>
    </>
  );
}