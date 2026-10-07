import CasePT from './pt';
import CaseEN from './en';
export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  return resolvedParams.lang === 'en' ? <CaseEN /> : <CasePT />;
}