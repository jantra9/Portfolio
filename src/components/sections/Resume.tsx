import React from 'react';
import { FaFileDownload,FaPhoneAlt } from "react-icons/fa";
import { Montserrat } from "next/font/google";
import { MdEmail,MdLocationOn  } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400'],
});
const Resume = () => {
  return (
      <div className='font-custom'>
        <div className='text-4xl font-bold py-5 pl-[5%] xl:text-5xl'>Res<span className='border-b-[5px] border-darkSalmon lg:pb-2'>ume.</span></div>
        <div className="relative w-full flex items-center justify-center">
          <div className="relative w-[100%] md:border sm:w-[90%] lg:h-[1250px] sm:my-10 max-w-[930px] md:shadow-3-sided text-black/[0.6]">
          <div className='absolute right-0 cursor-pointer text-pink-800'><FaFileDownload size={40}/></div>
          {/* This is the top part of resume */}
            <div className='bg-salmon/[0.5] h-[14%] flex justify-between items-center px-[5%] py-5'>
              <div className=''>
                <div className={`text-lg sm:text-2xl md:text-4xl pb-2 md:font-semibold tracking-wider ${montserrat.className}`}>JANESSA TRAN</div>
                <div className={`text-md md:text-2xl md:tracking-wider ${montserrat.className}`}>Fullstack developer</div>
              </div>
              <div className='text-sm leading-7'>
                <p className='flex items-center gap-2'><span><FaPhoneAlt size='1rem' /></span>0404 291 198</p>
                <p className='flex items-center gap-2'><span><TbWorld size='1rem'/></span>http://website.com</p>
                <p className='flex items-center gap-2'><span><MdEmail size='1rem'/></span>janetran251@gmail.com</p>
                <p className='flex items-center gap-2'><span><MdLocationOn size='1rem'/></span>Melbourne, Victoria</p>
              </div>
            </div>
            {/* This is the second part of the resume - Profile and skills */}
            <div className='px-[5%] pb-[20px] md:flex gap-12'>
                {/* Profile */}
                <div className='md:flex-[5]'>
                  <div className={`text-2xl tracking-widest font-bold pt-6 pb-3 ${montserrat.className}`}>Profile</div>
                  <p className='text-sm leading-6 text-justify'>Fullstack developer transitioning from nursing, offering a unique perspective on problem-solving and teamwork. Skilled in HTML, CSS, JavaScript, and proficient in React, React Native, and Next.js. Experienced with Git/GitHub, Bitbucket, and Jira, with strong adaptability, communication, and collaboration skills. Committed to delivering user-centered solutions with a positive, can-do attitude.</p>
                </div>
                {/* Education */}
                <div className='md:flex-[3]'>
                  <div className={`text-2xl tracking-widest font-bold pt-6 pb-3 ${montserrat.className}`}>Education</div>
                  <div>
                    <p className='text-sm'>Bachelor of Nursing</p>
                    <i className='text-sm'>2017-2019</i>
                    <p className='tracking-wider'>Deakin University</p>
                  </div>
                </div>
            </div>
            <div className='w-full bg-gray-200 h-[2px]'></div>
            {/* This is wrapper of work exp anad skills */}
            <div className='px-[5%] pb-[20px] md:flex gap-10'>
              {/* This is exp */}
              <div>
                <div className={`text-2xl tracking-widest font-bold pt-6  ${montserrat.className}`}>Work Experience</div>
                <ul>
                  <li className='py-3'>
                    <div><b>June 2024-Now</b></div>
                    <span>
                      <i>Lead Innovationz</i>
                    </span>
                    <div>
                      Full Stack Developer-internship
                    </div>
                    <ul className='pl-7 list-disc text-sm'>
                      <li>Develop and maintain web applications using Next.js, React Native, HTML, and CSS.</li>
                      <li>Style components with Tailwind CSS to ensure responsive and visually appealing designs.</li>
                      <li>Contribute to both front-end and back-end development, ensuring seamless integration and performance.</li>
                      <li>Participate in code reviews and implement feedback to enhance code quality and functionality.</li>
                    </ul>
                  </li>
                  <li className='py-3'>
                    <div><b>June 2023-July 2024</b></div>
                    <span>
                      <i>Home Care Assistance</i>
                    </span>
                    <div>
                      Care Manager
                    </div>
                    <ul className='pl-7 list-disc text-sm'>
                      <li>Teamwork: collaborate with multiple parties including health professionals, service providers to coordinate and meet clients’ needs</li>
                      <li>Problem-Solving: Addressed complex patient issues with innovative solutions</li>
                      <li>Data Management: Managed patient records with accuracy and confidentiality..</li>
                      <li>Quality Assurance: Monitored patient progress and adjusted care plans.</li>
                    </ul>
                  </li>
                  <li className='py-3'>
                    <div><b>May 2020- July 2023</b></div>
                    <span>
                      <i>Western Health- Sunshine hospital</i>
                    </span>
                    <div>
                      Registered Nurse- surgical and ICU
                    </div>
                    <ul className='pl-7 list-disc text-sm'>
                      <li>Team Collaboration: Worked with healthcare teams to ensure cohesive patient care.</li>
                      <li>Effective Communication: Maintained clear and compassionate communication with patients and families.</li>
                      <li>Training and Support: Provided guidance and support to patients, their families, and junior nurses.</li>
                      <li>Learning & Adaptability: Developed a strong capacity for learning complex procedures and adapting to fast-changing conditions.</li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/* This is the skill section */}
              <div>
                 <div className={`text-2xl tracking-widest font-bold pt-6 pb-3 ${montserrat.className}`}>Skills</div>
                 <ul className='pl-7 list-disc text-sm'>
                  <li>Attention to Details</li>
                  <li>Positive attitude</li>
                  <li>Teamwork</li>
                  <li>Time Management</li>
                  <li>Problem-solving</li>
                  <li>Effective Communication</li>
                  <li><b>Front-end development</b>: HTML, CSS, JS, React, NextJS, Tailwind CSS and Bootstrap</li>
                  <li><b>Back-end development</b>: NodeJS, ExpressJS, MongoDB, Rest API</li>
                  <li><b>Version control</b>: Git/GitHub, Jira and Bitbucket</li>
                 </ul>
              </div>
            </div>
        </div>
      </div>
      
    </div>
  );
};

export default Resume;
