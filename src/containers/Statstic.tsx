import Chart from '@/components/chart/Chart';
import Explanation from '@/components/Explanation';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Statstic = () => {
  return (
    <div className="my-16 flex flex-col gap-10 sm:gap-16">
      <Explanation
        title={'Bizni aniq sonlarimiz bilan tanishing'}
        subtitle={'Statistika'}
        description={
          'Barcha malumotlar faktga asoslangan bolib barchasi aniq va ravshan sonlar hisoblanadi, siz bizni platformaga yanada yaxshi baho berishingiz uchun ham shu narsa qilingan.'
        }
      />
      <div className="flex flex-col tablet:flex-row gap-4 tablet:justify-between">
        <div className="flex flex-col tablet:flex-row gap-4">
          <Select>
            <SelectTrigger className="w-full tablet:w-[240px]">
              <SelectValue placeholder="Viloyat" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-full tablet:w-[240px]">
              <SelectValue placeholder="Tuman" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-full tablet:w-[240px]">
              <SelectValue placeholder="Murojatlar turi" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Select>
          <SelectTrigger className="w-full tablet:w-[75px]">
            <SelectValue placeholder="Yil" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Chart />
    </div>
  );
};

export default Statstic;
