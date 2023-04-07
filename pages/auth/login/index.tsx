import PagesLogin from '@/view/auth/components/pages/login';
import MoleculesMetaHeader from '@/view/common/components/molecules/meta-header';
import AuthLayout from '@/view/common/components/templates/layout/auth-layout';
import {SEO} from '@/view/common/constants/seo';
import {NextPageWithLayout} from '@/view/common/types';

const Page: NextPageWithLayout = () => (
	<>
		<MoleculesMetaHeader
			title="Nextjs Boilerplate | Login"
			description={SEO.description}
			keywords={SEO.keywords}
			image={SEO.image}
		/>
		<PagesLogin />
	</>
);

Page.getLayout = page => <AuthLayout>{page}</AuthLayout>;

export default Page;
