import MoleculesMetaHeader from '@/view/common/components/molecules/meta-header';
import {SEO} from '@/view/common/constants/seo';
import {NextPageWithLayout} from '@/view/common/types';
import PagesHome from '@/view/home/components/pages/home';

const Page: NextPageWithLayout = () => (
	<>
		<MoleculesMetaHeader
			title="Nextjs Boilerplate | Home"
			description={SEO.description}
			keywords={SEO.keywords}
			image={SEO.image}
		/>
		<PagesHome />
	</>
);

export default Page;
