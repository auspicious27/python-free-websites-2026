export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface-2 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-text-secondary text-xs">&copy; 2025 LinuxWorld Informatics Pvt. Ltd. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#curriculum" className="text-text-secondary text-xs hover:text-white transition-colors">Curriculum</a>
          <a href="#projects" className="text-text-secondary text-xs hover:text-white transition-colors">Projects</a>
          <a href="#outcomes" className="text-text-secondary text-xs hover:text-white transition-colors">Outcomes</a>
        </div>
      </div>
    </footer>
  )
}
