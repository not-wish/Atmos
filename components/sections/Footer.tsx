import Link from 'next/link';
import CycleText from '@/components/ui/CycleText';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full bg-noctural pt-20 pb-10 gap-16">
      
      <div className="flex flex-col md:flex-row w-[90%] max-w-6xl justify-between gap-12">
        
        <div className="flex flex-col gap-6 md:w-1/3">
          <h2 className="text-3xl font-bold font-jetbrains-mono text-artic">Atmos</h2>
          <p className="text-gray-400 text-sm">
            Next-generation AI data automation. Deploy enterprise agents, sync neural networks, and scale your intelligence seamlessly.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-white">Platform</h3>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="#features" className="text-gray-400 transition-colors duration-200 ease-out hover:text-artic">Capabilities</Link>
            </li>
            <li>
              <Link href="#pricing" className="text-gray-400 transition-colors duration-200 ease-out hover:text-artic">Pricing</Link>
            </li>
            <li>
              <Link href="#reviews" className="text-gray-400 transition-colors duration-200 ease-out hover:text-artic">Enterprise Proof</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-white">Connect</h3>
          <ul className="flex flex-row gap-4">
            <li>
              <Link 
                href="https://github.com/not-wish" 
                target="_blank"
                className="flex p-2 rounded-full bg-white/10 text-white transition-all duration-200 ease-out hover:bg-artic hover:text-noctural hover:-translate-y-1"
                aria-label="GitHub"
              >
                GH
              </Link>
            </li>
            
            <li>
              <Link 
                href="https://linkedin.com/in/notwish" 
                target="_blank"
                className="flex p-2 rounded-full bg-white/10 text-white transition-all duration-200 ease-out hover:bg-artic hover:text-noctural hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                IN
              </Link>
            </li>
          </ul>
        </div>

      </div>

      <div className="flex flex-col md:flex-row w-[90%] max-w-6xl pt-8 border-t border-white/10 justify-between items-center gap-4 text-sm text-gray-500">
        <div className="flex items-center">
          <span>© 2026 </span>
          <CycleText />
          <span> All rights reserved.</span>
        </div>
        <div className="flex gap-6">
          <Link href="#" className="transition-colors duration-200 ease-out hover:text-white">Privacy Policy</Link>
          <Link href="#" className="transition-colors duration-200 ease-out hover:text-white">Terms of Service</Link>
        </div>
      </div>

    </footer>
  );
}