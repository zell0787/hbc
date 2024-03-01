import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { DEFAULT_NAME } from '@/constants';

const HomePage: React.FC = () => {
  return <Guide name={trim(DEFAULT_NAME)} />;
};

export default HomePage;
