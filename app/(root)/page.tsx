import { Button } from '@/components/ui/button';
import { dummyInterviews } from '@/constants';
import { Link } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import InterviewCard from '@/components/InterviewCard';
const Page = ()=>{
  return (
    <>
      <section className='card-cta'>
        <div className='flex flex-col gap-6 max-w-lg'>
          <h2>Get Interview Ready with AI-Powered Practice & Feedback</h2>

          <p className='text-lg'> Practice on real Interview questions</p>

          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>

        <Image src="/robot.png" alt='Hello' width={400} height={400} className='max-sm:hidden'></Image>

      </section>

      <section className='flex flex-col gap-6 mt-8'>
        <h2>Your Interviews</h2>
        <div className='interviews-section'>
          <div className='interviews-section'>
            {dummyInterviews.map((interview) => (
              <InterviewCard {...interview} key={interview.id}/>
            ))}
        </div>
        </div>
      </section>

      <section className='flex flex-col gap-6 mt-8'>
        <h2>Take an interview</h2>
        <div className='interviews-section'>
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id}/>
          ))}
        </div>
      </section>
    </>
  )
}

export default Page;