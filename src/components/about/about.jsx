import SectionHead from '../sectionHeads'
import Image from 'next/image'
import aboutImage from '../../../public/images/about.svg'


import tracksData from '../../../public/data/trackData'
export default function tracks(){
    return (
        <section className='flex flex-col my-8 mx-14'>
            <SectionHead sectionName="about us"/>
            <div className='flex  items-center justify-evenly m-auto gap-6 lg:flex-col-reverse '> 
                <div className='w-quarter_past mr-14 lg:m-auto'>
                <p className='leading-loose font-primary text-xl text-card_text lg:text-center m-auto'>🎀 CrossKnot is a mind-boggling 36-hour ⌛virtual hackathon, where the best of our practitioners and the brightest coders will come together solve real-world problems.</p>
                <p className='leading-loose font-primary text-xl text-card_text lg:text-center m-auto'>CrossKnot is a young community which provides technical education 💻 to interested people, with a aim to help them become tech industry ready 🚀 </p>
                </div>
                <div className='max-w-s lg:w-half'>
                <Image src={aboutImage} alt="about illustration"/>
                </div>
            </div>
        </section>
    )
}