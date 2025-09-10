import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { TeamSection, ProcessSection } from '@/modules/about/TeamSection';
import { teamMembers, processSteps } from '@/data/content';

export default function AboutPage() {
  return (
    <>
      <section className="py-20 bg-gradient-to-br from-background-paper via-white to-gray-custom/10">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Typography variant="subtitle" className="text-accent-main mb-3">
              ABOUT RALLY
            </Typography>
            <Typography variant="h1" className="mb-6">
              Your Strategic Business Partner
            </Typography>
            <Typography variant="body" className="text-text-secondary">
              At Rally Business Advisors, we believe that every business has the potential to achieve extraordinary growth. 
              Our mission is to help senior leaders and entrepreneurs navigate complex challenges and unlock their organization&apos;s 
              full potential through strategic planning, operational excellence, and leadership development.
            </Typography>
          </div>
        </Container>
      </section>

      <ProcessSection
        title="Our Process"
        subtitle="THE ALIGN 360 FRAMEWORK"
        steps={processSteps}
      />

      <TeamSection
        title="Meet Our Team"
        subtitle="EXPERIENCED PROFESSIONALS"
        description="Our team of seasoned business advisors brings decades of combined experience across various industries, 
        helping companies of all sizes achieve their strategic objectives."
        teamMembers={teamMembers}
      />

      <section className="py-20 bg-gray-custom/5">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Typography variant="h2" className="mb-6">
              Why Choose Rally Business Advisors?
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-main/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <Typography variant="h4" className="mb-3">
                  Proven Framework
                </Typography>
                <Typography variant="body" className="text-text-secondary">
                  Our ALIGN 360 planning framework has helped hundreds of businesses achieve sustainable growth and operational excellence.
                </Typography>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-main/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <Typography variant="h4" className="mb-3">
                  Expert Team
                </Typography>
                <Typography variant="body" className="text-text-secondary">
                  Our advisors bring decades of experience from Fortune 500 companies and successful startups across various industries.
                </Typography>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-main/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <Typography variant="h4" className="mb-3">
                  Measurable Results
                </Typography>
                <Typography variant="body" className="text-text-secondary">
                  We focus on delivering tangible, measurable results that drive real business value and sustainable competitive advantage.
                </Typography>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
