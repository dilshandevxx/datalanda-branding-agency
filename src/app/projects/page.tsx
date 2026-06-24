import Header from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import WorkSection from '@/components/WorkSection';

export default function ProjectsPage() {
  return (
    <main>
      <Header />
      <div style={{ paddingTop: '100px', minHeight: '80vh' }}>
        {/* Reusing the WorkSection to show all projects for now */}
        <WorkSection />
      </div>
      <FooterSection />
    </main>
  );
}
