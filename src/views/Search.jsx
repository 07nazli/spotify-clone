import categories from '../data/categories'
import favoriteCategories from '../data/favorite-categories'
import Title from '../components/Title'
import ScrollContainer from 'react-indiana-drag-scroll'
import { useEffect, useRef } from 'react'


function Category({ category }) {
  return (
      <div 
        style={{'background': category.color}}
        className='rounded-md before:pt-[100%] before:block relative'
      >
        <div className='absolute inset-0 overflow-hidden'>
          <h3 className='p-4 text-2xl tracking-tighter font-semibold'>
            {category.title}
          </h3>
          <img src={category.cover} className='shadow-spotify w-[6.25rem] h-[6.25rem] rotate-[25deg] translate-x-[18%] translate-y-[5%] absolute bottom-0 right-0'/>
        </div>
      </div>
  )
}

function WideCategory({ category }) {
  return (
      <div 
        style={{'background': category.color}}
        className='rounded-lg flex-shrink-0 relative w-[23rem] h-[13.75rem]'
      >
        <div className='absolute inset-0 overflow-hidden'>
          <h3 className='p-4 text-[2rem] tracking-tighter font-semibold'>
            {category.title}
          </h3>
          <img src={category.cover} 
            className='shadow-spotify w-32 h-32 rotate-[25deg] translate-x-[18%] translate-y-[5%] absolute bottom-0 right-0'/>
        </div>
      </div>
  )
}

function Search() {


    return (
      <>
        <section className='mb-8'>
          <Title title="Genres you listen to most" />
          <ScrollContainer 
            className='flex scrollable overflow-x gap-x-6'
          >
            {favoriteCategories.map((category, index) => <WideCategory key={index} category={category} /> )}
          </ScrollContainer>
        </section>

        <section>
          <Title title="Check them all out" />
          <div className='grid grid-cols-5 gap-6'>
            {categories.map((category, index) => <Category key={index} category={category} /> )}
          </div>
        </section>
        
      </>
    )
  }
  
  export default Search
  