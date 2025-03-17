import BreadcrumbNav from '@/components/BreadcrumbNav/BreadcrumbNav';
import Explanation from '@/components/Titles/Explanation';
import AllNews from '@/containers/AllNews';
import { AppLayout } from '@/layouts/AppLayout';

const NewsPage = () => {
  return (
    <AppLayout>
      <div className="container">
        <div className="my-10">
          <BreadcrumbNav text={'Barcha yangiliklar'} />
        </div>
        <Explanation
          subtitle="Barcha yangiliklar"
          title="Yangiliklar bilan tanishamiz"
          description="Subscribe to learn about new product features, the latest in technology, solutions, and updates."
        />
        <div className="my-16 sm:my-20">
          <AllNews />
        </div>
      </div>
    </AppLayout>
  );
};

export default NewsPage;
