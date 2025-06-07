export default function HomePage() {
  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Muvvala Bharath</h1>
          <nav className="space-x-4">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#resume" className="hover:text-blue-600">Resume</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#certs" className="hover:text-blue-600">Certifications</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Hi, I'm Muvvala Bharath 👋</h2>
        <p className="text-lg">Team Leader | AI/ML | Logistics & Supply Chain Expert</p>
        <a href="/resume.pdf" className="mt-6 inline-block bg-white text-blue-600 px-6 py-2 rounded-full font-semibold shadow hover:bg-gray-100">Download Resume</a>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto px-4 py-16">
        <h3 className="text-2xl font-bold mb-4">About Me</h3>
        <p>
          With over 6 years of experience, I specialize in AI/ML projects, supply chain management,
          and leading high-performing teams. My background includes work with Tech Mahindra,
          iMerit, Delhivery, and more.
        </p>
      </section>

      {/* Resume */}
      <section id="resume" className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Professional Experience</h3>
          <ul className="space-y-4">
            <li><strong>Whizard</strong> – Process Associate (Nov 2024 – Apr 2025)</li>
            <li><strong>Delhivery</strong> – Team Lead Intern (Sep 2024 – Nov 2024)</li>
            <li><strong>iMerit</strong> – Team Lead (Jul 2022 – Mar 2024)</li>
            <li><strong>Patra India</strong> – Senior Executive (Nov 2019 – Nov 2021)</li>
            <li><strong>Pro-Vigil</strong> – Monitoring Executive (Apr 2018 – Jun 2019)</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-4xl mx-auto px-4 py-16">
        <h3 className="text-2xl font-bold mb-4">Projects</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Latitude AI – Annotating autonomous vehicle datasets (iMerit)</li>
          <li>Content Moderation – Filtering policy-violating content</li>
          <li>Supply Chain Ops – Shipment & last-mile tracking (Whizard, Delhivery)</li>
        </ul>
      </section>

      {/* Certifications */}
      <section id="certs" className="bg-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Certifications & Awards</h3>
          <ul className="list-disc list-inside">
            <li>Computer Vision Level 2</li>
            <li>Supply Chain – NPTEL, TMF, Atingi</li>
            <li>Best Employee – Pro-Vigil</li>
            <li>Hardware & Networking – Millennium Solutions</li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h3 className="text-2xl font-bold mb-4">Contact Me</h3>
        <p>Email: <a href="mailto:muvvalabharath@gmail.com" className="text-blue-600">muvvalabharath@gmail.com</a></p>
        <p>Phone: +91 9700630408</p>
        <p>Location: Visakhapatnam, India</p>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 bg-white border-t text-sm">
        &copy; 2025 Muvvala Bharath. All rights reserved.
      </footer>
    </div>
  );
}
