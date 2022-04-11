
/**
 * 
 * Speaker Card Component  of Crossknot hacks hackathon
 * 
 */

import Image from "next/image"
import Link from 'next/link'

import twitterIcon from "../../../public/images/socials/twitter.svg"
import linkedinIcon from "../../../public/images/socials/linkedin.svg"
import githubIcon from "../../../public/images/socials/github.svg"



export default function SpeakerCard({speaker}){
 console.log("speaker ", speaker);
    return (
            <div className="flex flex-col relative items-center justify-center">
                <div className="relative group">
                    {/* Speaker image */}
                    <Image src={speaker.picture[0].url} alt={speaker.name} height={200} width={200} className="border-primary_dark border-4 rounded-full z-10 group-hover:blur-sm transition-all duration-50" />

                    {/* Speakers social handles to be dispalyed on hover */}
                    <div className="absolute top-0 bottom-0 left-0 right-0 hidden z-20 gap-2 place-content-center items-center group-hover:flex transition-all duration-200">
                        {speaker.github &&  <Link href={speaker.github}><a target="_blank"><i><Image src={githubIcon} alt="github" /></i></a></Link>}
                        {speaker.linkedin && <Link href={speaker.linkedin}><a target="_blank"><i><Image src={linkedinIcon} alt="linkedin" /></i></a></Link>}
                        {speaker.twitter && <Link href={speaker.twitter}><a target="_blank"><i><Image src={twitterIcon} alt="twitter" /></i></a></Link>}
                    </div>
                </div>

                {/* Speaker's name and designation */}
                <div className="bg-white pb-4 pt-10 px-6 flex flex-col items-center justify-center border-grey border-2 rounded-lg absolute top-40">
                <h4 className="text-center font-primary font-extrabold">{speaker.name}</h4>
                <h5 className="text-center font-primary ">{speaker.desc}</h5>
                </div>
            </div>
    )
}