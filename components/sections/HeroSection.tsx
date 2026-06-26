import Link from 'next/link';
import AnimatedList from '@/components/ui/AnimatedList';

export default function HeroSection() {
  return (
    <section className='flex min-h-[90vh] z-0 w-full py-12'>
      <div className='flex flex-col justify-center gap-6 md:gap-10 w-1/2 px-4 md:px-6'>
        <div className='flex flex-col gap-4'>
            <h1 className='text-3xl md:text-5xl font-bold'>Power your future with AI</h1>
            <p className='max-w-128 text-sm md:text-lg'>Deploy custom enterprise agents and automate complex workflows. Scale your intelligence with Atmos today.</p>
        </div>
        <div className='flex p-0.5 bg-artic w-fit'>
            <Link href="#pricing" className='bg-artic px-3 py-1 md:px-4 md:py-2 text-noctural text-base md:text-lg w-fit transition-colors ease-out duration-200 hover:bg-noctural hover:text-artic'>
                <span className='font-semibold'>Build a Workflow</span>
            </Link>
        </div>
      </div>

      <div className='flex flex-col items-center w-1/2'>
        <div className='text-lg md:text-3xl font-medium'>
            <AnimatedList items={["AI Strategy", "Custom Agents", "Process Automation", "Data Intelligence"]} />
        </div>
      </div>
    </section>
  )
}