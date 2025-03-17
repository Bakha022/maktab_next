import BreadcrumbNav from '@/components/BreadcrumbNav/BreadcrumbNav';
import Explanation from '@/components/Titles/Explanation';
import { AppLayout } from '@/layouts/AppLayout';

const NewsDetailPage = () => {
  return (
    <AppLayout>
      <div className="container">
        <div className="my-10">
          <BreadcrumbNav text="Yangilik" />
        </div>
        <Explanation
          subtitle="View"
          title="Direktorlar endi tekinga imtixon topshirishadi"
          description="How do you create compelling presentations that wow your colleagues and impress your managers? Here’s how to get started."
        />
      </div>
    </AppLayout>
  );
};

export default NewsDetailPage;
