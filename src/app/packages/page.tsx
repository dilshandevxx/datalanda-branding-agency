import Header from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import PackagesSection from '@/components/PackagesSection';
import ProjectInMindCTA from '@/components/ProjectInMindCTA';
import FooterCTASection from '@/components/FooterCTASection';

export default function PackagesPage() {
  return (
    <main>
      <Header />
      {/* Adding top padding since it's a dedicated page and might be under header otherwise */}
      <div style={{ paddingTop: '8rem' }}>
        <PackagesSection />
      </div>
      <ProjectInMindCTA />
      <FooterCTASection />
      <FooterSection />
    </main>
  );
}
