import { Icon } from '@lobehub/ui';
import { Loader2 } from 'lucide-react';
import { memo } from 'react';
import { Center, Flexbox } from 'react-layout-kit';

const FullscreenLoading = memo<{ title?: string }>(({ title }) => {
  return (
    <Flexbox height={'100%'} width={'100%'}>
      <Center flex={1} gap={12} width={'100%'}>
        <img
          alt="Logo"
          src="https://www.yanto.cc/wp-content/uploads/2023/11/logo-3.png"
          style={{ height: '36px', width: '92.28px' }}
        />
        <Center gap={16} horizontal>
          <Icon icon={Loader2} spin />
          {title}
        </Center>
      </Center>
    </Flexbox>
  );
});

export default FullscreenLoading;
