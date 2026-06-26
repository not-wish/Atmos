import Link from 'next/link'

function HeroSection() {
  return (
    <section className='flex min-h-[90vh] z-0 w-full py-12'>
      <div className='flex flex-col justify-center gap-10 w-1/2 px-6'>
        <div className='flex flex-col gap-4'>
            <h1 className='text-5xl font-bold'>Power your future with AI</h1>
            <p className='max-w-128 text-lg'>Deploy custom enterprise agents and automate complex workflows. Scale your intelligence with Atmos today.</p>
        </div>
        <div className='flex p-0.5 bg-artic w-fit'>
            <Link href="#pricing" className='bg-artic px-4 py-2 text-noctural text-lg w-fit transition-colors ease-out duration-200 hover:bg-noctural hover:text-artic'>
                <span className='font-semibold'>Build a Workflow</span>
            </Link>
        </div>
      </div>

      <div className='flex flex-col items-center w-1/2'>
        <ul className='flex flex-col gap-4 text-2xl font-medium'>
            <li>AI Strategy</li>
            <li>Custom Agents</li>
            <li>Process Automation</li>
            <li>Data Intelligence</li>
        </ul>
      </div>
    </section>
  )
}

export default HeroSection