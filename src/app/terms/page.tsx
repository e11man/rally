import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';

export default function TermsPage() {
  return (
    <section className="py-20 bg-gray-custom/10">
      <Container>
        <div className="max-w-3xl mx-auto">
          <Typography variant="h1" className="mb-6">Terms of Service</Typography>
          <Typography variant="body" className="text-text-secondary mb-6">
            These terms govern your use of the Rally Business Advisors website and services.
          </Typography>
          <div className="space-y-6">
            <div>
              <Typography variant="h3" className="mb-2">Use of Website</Typography>
              <Typography variant="body" className="text-text-secondary">
                You agree to use the website lawfully and not misuse any content or functionality.
              </Typography>
            </div>
            <div>
              <Typography variant="h3" className="mb-2">Liability</Typography>
              <Typography variant="body" className="text-text-secondary">
                The site is provided &quot;as is&quot; without warranties. We are not liable for any damages arising from its use.
              </Typography>
            </div>
            <div>
              <Typography variant="h3" className="mb-2">Contact</Typography>
              <Typography variant="body" className="text-text-secondary">
                Questions? Email us at hello@rallybusinessadvisors.com.
              </Typography>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
